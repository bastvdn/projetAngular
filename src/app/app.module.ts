import { CategorieService } from './services/categorie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ArticleComponent } from './articleSet/article/article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from './services/article.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { ArticleViewComponent } from './articleSet/article-view/article-view.component';
import { SingleArticleComponent } from './articleSet/single-article/single-article.component';



import { EditArticleComponent } from './edit-article/edit-article.component';
import { LoginUserComponent } from './login-user/login-user.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticleViewComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'articles/:cat', component: ArticleViewComponent },
  
  { path: 'auth', component: AuthComponent },
  { path: 'signin', component: LoginUserComponent },
  { path: 'editarticle', component: EditArticleComponent },
  { path: '', component: ArticleViewComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthComponent,
    ArticleViewComponent,  
    SingleArticleComponent,
    
    EditArticleComponent,
    LoginUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArticleService,
    AuthService,
    AuthGuard,
    UserService,
    CategorieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
