import * as firebase from 'firebase';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import DataSnapshot = firebase.database.DataSnapshot;
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isAuth = false;
  users: User[] = [];

  constructor(private httpClient : HttpClient){
    setTimeout(
      () => {
        this.getUsersDB();
      }, 100
    );
    
  }

  getUsersDB(){
    firebase.database().ref('/users')
        .on('value', (data: DataSnapshot) => {
            this.users = data.val() ? data.val() : [];
          }
        );

  }

  saveUsers() {
    firebase.database().ref('/users').set(this.users);
  }

  addUser(email: string, password: string, username: string){
    const user = new User(1,username,email,password);
    this.users.push(user);
    this.saveUsers();

  }

  getUserFromEmail(email : string){
    const user= this.users.find(
      articleL => 
        articleL.email === email
      
    );

    return user;

  }

  signOutUser() {
    firebase.auth().signOut();
}

  createNewUser(email: string, password: string, username : string) {
    this.addUser(email,password,username);
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}