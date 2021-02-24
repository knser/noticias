import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Titulares } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const apikey=environment.apiKey;
const apiUrl=environment.apiUrl;
const headers=new HttpHeaders({
  'X-Api-key':apikey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpClient:HttpClient) { }

  private ejecutarServicio<t>(query:string){
    query = apiUrl + query;
    console.log(query);
    return this.httpClient.get<t>(query,{headers});
  }

  getTitulares(){
    return this.ejecutarServicio('/top-headlines?country=us');
    //return this.httpClient.get<Titulares>('https://newsapi.org/v2/top-headlines?country=us&apiKey=fdb5419249794b839700a1345cbb393d');
  }

  getCategorias(categoria:string){
    //return this.ejecutarServicio(`/top-headlines?country=us&category=${categoria}`);
    //return this.httpClient.get<Titulares>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fdb5419249794b839700a1345cbb393d');
    return this.httpClient.get<Titulares>('https://newsapi.org/v2/top-headlines?country=us&apiKey=fdb5419249794b839700a1345cbb393d&category=business');
  }

}
