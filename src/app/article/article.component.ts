import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articleTitle: string;
  @Input() articleDescription: string;
  @Input() articlePrice: string;
  @Input() image: string;
  @Input() id: number;

  

  status: string = "ok";

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private articleService: ArticleService) { }

  

  ngOnInit(): void {
  }

}
