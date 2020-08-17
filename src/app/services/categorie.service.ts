import { Categorie } from './../models/Categorie.model';
import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class CategorieService {


  private categories: Categorie[] = [];
  categorieSubject = new Subject<Categorie[]>();



  constructor(private httpClient : HttpClient){
    setTimeout(
        () => {
            this.getCategorieDB();
        }, 100
      );
    
     
  }

  saveCategorie() {
    firebase.database().ref('/categories').set(this.categories);
  }

  getCategorieDB() {
    firebase.database().ref('/categories')
    .on('value', (data: DataSnapshot) => {
        this.categories = data.val() ? data.val() : [];
      }
    );
    console.log(this.categories);
  }
  getCategories(){
    return this.categories;

  }

  
  
}