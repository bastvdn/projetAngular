import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  private users: User[] = [
    new User(1, 'Will', 'Alexander', 'will@will.com'),
    new User(1, 'aazaezel', 'Alexander', 'will@will.com')
];
  userSubject = new Subject<User[]>();

  constructor(private httpClient : HttpClient){

    
  }
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  saveUserToServer() {
    this.httpClient
      .put('https://projetangular-a0116.firebaseio.com/users.json', this.users)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
}