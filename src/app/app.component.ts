import { Component } from '@angular/core';
import { Game } from './life-core/game/Game';
import { Grid } from './life-core/grid/Grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Of Life';
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
