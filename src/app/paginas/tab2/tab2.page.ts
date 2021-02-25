import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment,{static:true}) segmento:IonSegment;

  categorias: any[] = ['business','entertainment','general','health','science','sports','technology'];
  
  noticias:Article[]=[];

  constructor(private NoticiasService:NoticiasService) {}

  ngOnInit(){
    //console.log('categoria:'+this.categorias[0]);
    this.segmento.value=this.categorias[0];
    this.cargarnoticias(this.categorias[0]);
  }

  
  cambiodecategoria(event){
    this.noticias=[];
    console.log('evento:'+event.detail.value);
    this.cargarnoticias(event.detail.value);   
  }

  cargarnoticias(categoria:string){
    this.NoticiasService.getCategorias(categoria).subscribe(resp=>{
      console.log('categoria:'+categoria);
      this.noticias.push(...resp.articles);
    }) 
  }
  

}
