import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Titulares } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpClient:HttpClient) { }

  getTitulares(){
    return this.httpClient.get<Titulares>('https://newsapi.org/v2/top-headlines?country=us&apiKey=fdb5419249794b839700a1345cbb393d');
  }

}
