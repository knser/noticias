import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categorias: any[] = ['business','entertainment','general','health','science','sports','technology'];
  
  noticias:Article[];

  constructor(private NoticiasService:NoticiasService) {}

  ngOnInit(){

  }

  segmentChanged($event){
    console.log($event.detail.value);
    this.NoticiasService.getCategorias($event.detail.value).subscribe(resp=>{
      console.log(resp);
      //this.noticias.push(...resp.Article);
    })    
  }

}
