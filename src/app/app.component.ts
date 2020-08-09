import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuth = true;
  title = "hello"

  articles: any[];

  constructor(private articleService: ArticleService) {
    

  }

  ngOnInit(){
    this.articles = this.articleService.articles;

  }

  onAllumer() {
    this.articleService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.articleService.switchOffAll();
    } else {
      return null;
    }
}

}
