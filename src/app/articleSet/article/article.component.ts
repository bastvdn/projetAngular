import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';


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
  @Input() articleCat: string;
  @Input() articleImg: string;
  
  

  @Input() id: number;

  

  status: string = "ok";


  constructor(private articleService: ArticleService) { }

  

  ngOnInit(): void {
  }

}
