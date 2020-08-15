import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/Article.model';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  article : Article;
  title : string;
  description : string;
  image : string;
  

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];
    this.article = this.articleService.getArticleById(+id);
    console.log(this.article);
    this.title = this.article.title;
    this.description = this.article.description;
    this.image = this.article.image;
  }

}
