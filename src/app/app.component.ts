import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import * as firebase from 'firebase';
import { CategorieService } from './services/categorie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isAuth: boolean;
  userName: string;

  title = "projetAngular"

  constructor(private articleService: ArticleService, private authService: AuthService, private categorieService: CategorieService) {
    var firebaseConfig = {
      apiKey: "AIzaSyAdaJFEM7SPpM0ppKiuPBleQj10sLiEolw",
      authDomain: "projetangular-a0116.firebaseapp.com",
      databaseURL: "https://projetangular-a0116.firebaseio.com",
      projectId: "projetangular-a0116",
      storageBucket: "projetangular-a0116.appspot.com",
      messagingSenderId: "584778266414",
      appId: "1:584778266414:web:827ee51252e060e8302cbf",
      measurementId: "G-49N3SB8XGF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          
          this.isAuth = true;
          
        } else {
          this.isAuth = false;
        }
      }
    );
    setTimeout(
      () => {
        this.userName = this.authService.getUserFromEmail(firebase.auth().currentUser.email).username;
      }, 3000
    );
    
  }

  onSignOut() {
    this.authService.signOutUser();
  }

  
}


