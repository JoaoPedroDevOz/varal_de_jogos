import { Component } from '@angular/core';
import { CardGame } from '../utils/card.utils';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  cardObj: CardGame = {
    title: 'Dany',
    paragraph: 'Jogo de 3 a 8 jogadores...',
    marketLink: 'https://www.amazon.com.br/BUR%C3%93-7898969247436-Dany/dp/B0BG35P3B7',
    imgLink: 'https://m.media-amazon.com/images/I/61NmJQwN7PL._AC_SL1280_.jpg'
  }
}
