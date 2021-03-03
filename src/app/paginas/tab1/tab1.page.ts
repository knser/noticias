import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias:Article[]=[];

  constructor(private NoticiasService:NoticiasService) {}

  ngOnInit(){
    this.cargarnoticias();
  }

  loadData(event){
    this.cargarnoticias(event);
  }

  cargarnoticias(event?){
    this.NoticiasService.getTitulares().subscribe(resp=>{
      if(resp.articles.length===0){
        event.target.disabled=true;
        event.target.complete();
        return;
      }
      this.noticias.push(...resp.articles);
    })
    if(event){
      event.target.complete();
    }
  }


}
