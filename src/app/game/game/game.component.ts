import { Component } from '@angular/core';
import { Game, Grid } from 'src/app/life-core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  game: Game;
  grid: Grid;

  constructor() {
    this.game = Game.getInstance();
    this.grid = this.game.grid;
  }

  play() {
    this.game.play();
  }

  stop() {
    this.game.stop();
  }

}
