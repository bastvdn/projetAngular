import { Categorie } from './../../models/Categorie.model';
import { CategorieService } from './../../services/categorie.service';

import { Component, OnInit, Input } from '@angular/core';


import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from 'src/app/models/Article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  articles: Article[];
  articleSubscription: Subscription;
  categories: Categorie[];


  constructor(private articleService: ArticleService, private authService : AuthService, private categorieService : CategorieService, private router : Router) { }

  ngOnInit() {
    this.categories = this.categorieService.getCategories();
    
    this.articleSubscription = this.articleService.articlesSubject.subscribe(
      (articles: Article[]) => {
        this.articles = articles
      }
    )
    this.articleService.emitArticleSubject();
  }

  onSave(){
    this.articleService.getArticles();
    
  }
  
  onFetch(){
    this.categories = this.categorieService.getCategories();

  }

  onDeleteArticle(article: Article) {
    this.articleService.removeArticle(article);
  }
  
  onCat(str : string){
    console.log(str);
    this.router.navigate(['/articles'], { queryParams: { cat: str } });
  }

  ngOnDestroy(){
    this.articleSubscription.unsubscribe();
  }

}
