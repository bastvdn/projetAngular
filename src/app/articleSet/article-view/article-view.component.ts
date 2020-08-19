import { element } from 'protractor';
import { Categorie } from './../../models/Categorie.model';
import { CategorieService } from './../../services/categorie.service';

import { Component, OnInit, Input } from '@angular/core';
import { first, map } from 'rxjs/operators';


import { Subscription, Subject } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from 'src/app/models/Article.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  articles: Article[];
  articlesTri: Article[] = [];
  articleSubscription: Subscription;
  categorieSubscription: Subscription;

  categories: Categorie[];
  param1: string;


  constructor(private articleService: ArticleService, private authService : AuthService, private categorieService : CategorieService, private router : Router, private route : ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param1 = params['cat'];
      
      if(this.param1){
        console.log("new param" + this.param1);
        this.articlesTri = [];
        this.articles.forEach(elem => this.checkCat(elem))
      
        console.log(this.articlesTri)
      }
    });
   
   }


   ngOnChanges(){


   }

  ngOnInit() {
    
    console.log("init");
    this.articleSubscription = this.articleService.articlesSubject.subscribe(
      (articles: Article[]) => {
        this.articles = articles.reverse();
        this.articlesTri = articles.reverse();
      }
    )
    this.categorieSubscription = this.categorieService.categorieSubject.subscribe(
      (categories: Categorie[]) => {
        this.categories = categories
      }
    )
    this.categories = this.categorieService.getCategories();

    if(!this.param1){
      
    }
    else{
      
      this.articles.forEach(elem => this.checkCat(elem))
      
     
    }
    
    this.articleService.emitArticleSubject();
  }

  checkCat(article: Article){
    if(article.categorie.title == this.param1){
      this.articlesTri.push(article);
    }
    console.log(this.articlesTri);

  }

  onSave(){
    this.articleService.getArticles();
    
  }
  
  onFetch(){
    console.log(this.categorieService.getCategories());
    this.categories = this.categorieService.getCategories();
    if(!this.param1){
    
      
    }
    else{
      console.log("this.param1");
      this.articles.forEach(elem => this.checkCat(elem))
      this.articles = this.articlesTri;
    
    }
    
  }

  onDeleteArticle(article: Article) {
    this.articleService.removeArticle(article);
  }
  
  onCat(str : string){
    
    this.router.navigate(['/articles'], { queryParams: { cat: str } });
  }

  ngOnDestroy(){
    this.articleSubscription.unsubscribe();
  }

}
