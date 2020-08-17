
import { Component, OnInit, Input } from '@angular/core';


import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from 'src/app/models/Article.model';

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
    this.articleService.getArticles();
    
  }
  
  onFetch(){
    

  }

  onDeleteArticle(article: Article) {
    this.articleService.removeArticle(article);
  }

  ngOnDestroy(){
    this.articleSubscription.unsubscribe();
  }

}
