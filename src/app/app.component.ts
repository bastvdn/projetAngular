import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = "hello";
  isAuth: boolean = false;
  

  constructor(private articleService: ArticleService, private authService: AuthService) {
    

  }

  ngOnInit(){

    const counter = interval(1000);

  }

  
}


