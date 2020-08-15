import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from './services/article.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { ArticleViewComponent } from './article-view/article-view.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticleViewComponent },
  { path: 'articles/:id', canActivate: [AuthGuard], component: SingleArticleComponent },
  { path: 'users', component: UserListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: 'editarticle', component: EditArticleComponent },
  { path: '', component: ArticleViewComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticleComponent,
    AuthComponent,
    ArticleViewComponent,  
    SingleArticleComponent,
    UserListComponent,
    NewUserComponent,
    EditArticleComponent
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
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
