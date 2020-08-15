import { Article } from './../models/Article.model';
import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  articles: Article[];
  articleSubscription: Subscription;



  constructor(private articleService: ArticleService, private authService : AuthService) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.articlesSubject.subscribe(
      (articles: Article[]) => {
        this.articles = articles

      }

    )
    this.articleService.emitArticleSubject();
  }

  onSave(){

    this.articleService.saveArticlesToServer()
  }
  
  onFetch(){
    this.articleService.getArticlesFromServer()

  }

}
