import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Article } from './../models/Article.model';
import { User } from './../models/User.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;



import { Subject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  articlesSubject = new Subject<Article[]>();
  

  articles: Article[] = [];

    constructor(private httpClient : HttpClient){
      setTimeout(
        () => {
          this.getArticles();
          this.emitArticleSubject()
        }, 100
      );
      
    }

    emitArticleSubject() {
      this.articlesSubject.next(this.articles);
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    addArticle(article : Article){
      
      article.id = this.getRandomInt(10000);
      article.date = firebase.database.ServerValue.TIMESTAMP;
      this.articles.push(article);
      this.saveArticles();
      this.emitArticleSubject();
    }

    saveArticles() {
      firebase.database().ref('/articles').set(this.articles);
    }

    getArticles() {
      firebase.database().ref('/articles')
        .on('value', (data: DataSnapshot) => {
            this.articles = data.val() ? data.val() : [];
            this.emitArticleSubject();
          }
        );
    }

    getNewId() {

    }

    removeArticle(article: Article){
      const articleIndexToRemove = this.articles.findIndex(
        (articleEl) => {
          if(articleEl === article) {
            return true;
          }
        }
      );
      this.articles.splice(articleIndexToRemove, 1);
      this.saveArticles();
      this.emitArticleSubject();
    }

    getArticleById(id: number) {
      
      const article = this.articles.find(
        articleL => 
          articleL.id === id
        
      );
      console.log(article);
      return article;
  }
    getArticlesByCat(cat: string){
      const article = this.articles.find(
        articleL => 
          articleL.categorie.title === cat
        
      );
      console.log(article);
      return article;
    }
}