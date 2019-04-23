import { Component } from '@angular/core';
import { Game } from 'src/app/life-core/game/Game';
import { Grid } from 'src/app/life-core/grid/Grid';

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
