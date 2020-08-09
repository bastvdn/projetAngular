import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articleName: string;
  @Input() articleStatus: string;
  @Input() index: number;

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

  onSwitch() {
    if(this.articleStatus === 'allumé') {
      this.articleService.switchOffOne(this.index);
    } else if(this.articleStatus === 'éteint') {
      this.articleService.switchOnOne(this.index);
    }
}

  getStatus(){
    return status;
    
  }

  ngOnInit(): void {
  }

}
