import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Article } from './../models/Article.model';
import { User } from './../models/User.model';

import { Subject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  articlesSubject = new Subject<Article[]>();
  

  articles = [
      {
        id: 1,
        title: "premier",
        description: "any",
        image: "https://image.jeuxvideo.com/medias/151689/1516893501-9622-jaquette-avant.jpg",
        price: 10,
        date: new Date(),
        categorie: "string",
        Author: new User()
        
      },
      {
        id: 2,
        title: "salut",
        description: "any",
        image: "string",
        price: 10,
        date: new Date(),
        categorie: "string",
        Author: new User()
      }
    ];

    constructor(private httpClient : HttpClient){



    }

    saveArticlesToServer() {
      this.httpClient
        .put('https://projetangular-a0116.firebaseio.com/articles.json', this.articles)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }

    getArticlesFromServer() {
      this.httpClient
        .get<Article[]>('https://projetangular-a0116.firebaseio.com/articles.json')
        .subscribe(
          (response) => {
            this.articles = response;
            this.emitArticleSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }

    emitArticleSubject() {
      this.articlesSubject.next(this.articles.slice());
    }

    addArticle(article : Article){
      this.articles.push(article);
      this.emitArticleSubject();
    }


    getArticleById(id: number) {
      
      let article = this.articles.find(
        articleL => 
          articleL.id === id
        
      );
      console.log(article);
      return article;
  }
}