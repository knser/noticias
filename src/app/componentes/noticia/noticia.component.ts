import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;

  constructor(private iab: InAppBrowser, private ss: SocialSharing, private asc:ActionSheetController) { }

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};   

  ngOnInit() {}

  abrir(){
    this.openWithInAppBrowser(this.noticia.url);
  }

  compartir(){
    this.ss.share(
      this.noticia.title,
      this.noticia.source.name,
      '',
      this.noticia.url
      );
  }

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.iab.create(url,target,this.options);
  }
  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.iab.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
      let target = "_self";
      this.iab.create(url,target,this.options);
  } 
  
  async lanzarAction() {
    const actionSheet = await this.asc.create({
      header: 'Titulares',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Leer',
        icon: 'eye-outline',
        handler: () => {
          this.abrir();         
        }
      },{
        text: 'Compartir',
        icon: 'share-social-outline',
        handler: () => {
          console.log('Compartir clicked');
          this.ss.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
            );          
        }
      }, {
        text: 'Favorito',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorito clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar clicked');
        }
      }]
    });
    await actionSheet.present();
  }  

}
