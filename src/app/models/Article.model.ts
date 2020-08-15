import { User } from './User.model';

export class Article {
    constructor(
      public id: number,
      public title: string,
      public description: any,
      public price: number,
      public image: string,
      public date: Date,
      public categorie: string,
      public Author: User
    ) {}
  }