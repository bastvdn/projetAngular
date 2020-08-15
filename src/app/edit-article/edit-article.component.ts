import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { Article } from '../models/Article.model';
import { User } from '../models/User.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private articleService: ArticleService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.articleForm = this.formBuilder.group({
      title: '',
      description: '',
      price: '',
      image: ''
      
    });

  }

  onSubmitForm() {
    const formValue = this.articleForm.value;
    const newArticle = new Article(
      1,
      formValue['title'],
      formValue['description'],
      formValue['price'],
      formValue['image'],
      
      new Date(),
      "rien",
      new User()
    );
    this.articleService.addArticle(newArticle);
    console.log(this.articleService.articles)
    this.router.navigate(['/articles']);
  }

}
