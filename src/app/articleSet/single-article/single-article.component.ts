import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/article.service';
import { User } from 'src/app/models/User.model';


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
  price : number;
  author : string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];

    this.article = this.articleService.getArticleById(+id);
    this.title = this.article.title;
    this.description = this.article.description;
    this.image = this.article.image;
    this.price = this.article.price;
    this.author = this.article.Author.username;
    console.log("auteur :" + this.author);

  }

  onFetch(){
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.article = this.articleService.getArticleById(+id);
    console.log(this.article);
    this.title = this.article.title;
    this.description = this.article.description;
    this.image = this.article.image;
    this.price = this.article.price;
    this.author = this.article.Author.username;

  }

}
