import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/article.service';
import { User } from 'src/app/models/User.model';
import * as firebase from 'firebase';


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
  authorMail: string;
  categorie : string;
  edit : boolean = false;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private authService : AuthService, private router : Router) { 
    
    const id = this.route.snapshot.params['id'];
        this.article = this.articleService.getArticleById(+id);
    this.title = this.article.title;
    this.description = this.article.description;
    this.image = this.article.image;
    this.price = this.article.price;
    this.author = this.article.Author.username;
    this.categorie = this.article.categorie.title;
  }

  ngOnInit() {
    setTimeout(
      () => {
        const id = this.route.snapshot.params['id'];
        this.article = this.articleService.getArticleById(+id);
    this.title = this.article.title;
    this.description = this.article.description;
    this.image = this.article.image;
    this.price = this.article.price;
    this.author = this.article.Author.username;
    this.authorMail = this.article.Author.email;
    this.categorie = this.article.categorie.title;
    if(this.authService.getUserFromEmail(firebase.auth().currentUser.email).username == this.author){
      this.edit = true;

    }
      }, 500
    );
  }
  onDel(){
    this.articleService.removeArticle(this.article);
    this.router.navigate(['/articles'])
    
  }

}
