import { Categorie } from './Categorie.model';
import { User } from './User.model';
import { Timestamp } from 'rxjs';

export class Article {
    constructor(
      public id: number,
      public title: string,
      public description: any,
      public price: number,
      public image: string,
      public date: any,
      public categorie: Categorie,
      public Author: User,
      
    ) {}
  }