import { AuthService } from 'src/app/services/auth.service';
import { Categorie } from './../models/Categorie.model';
import { CategorieService } from './../services/categorie.service';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { Article } from '../models/Article.model';
import { User } from '../models/User.model';
import * as firebase from 'firebase';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleForm: FormGroup;
  public categories: Categorie[] = [];

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private articleService: ArticleService,
              private categorieService: CategorieService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
    this.categories = this.categorieService.getCategories();
    console.log(this.categories);
  }

  initForm(){
    this.articleForm = this.formBuilder.group({
      title: ['',Validators.required, Validators.min(5)],
      description: ['',Validators.required],
      price: ['',Validators.required],
      image: ['',Validators.required],
      categorie: ['',Validators.required],
      
    });

  }

  onSubmitForm() {
    const formValue = this.articleForm.value;
    console.log(formValue['categorie']);
    const cat =  this.categories.find(el => el.title === formValue['categorie']);
    console.log(cat);
    
    
    const newArticle = new Article(
      1,
      formValue['title'],
      formValue['description'],
      formValue['price'],
      formValue['image'],
      new Date(),
      cat,
      this.authService.getUserFromEmail(firebase.auth().currentUser.email)
    );
    
    this.articleService.addArticle(newArticle);
   
    
    this.router.navigate(['/articles']);
  }

  onFetcs(){
    const formValue = this.articleForm.value;
    console.log(formValue['categorie']);
    
  }

}
