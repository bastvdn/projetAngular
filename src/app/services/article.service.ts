export class ArticleService {
    articles = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];


    switchOnAll() {
        for(let appareil of this.articles) {
          appareil.status = 'allumé';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.articles) {
          appareil.status = 'éteint';
        }
    }

    switchOnOne(i: number) {
        this.articles[i].status = 'allumé';
    }
    
    switchOffOne(i: number) {
        this.articles[i].status = 'éteint';
    }
}