import { Component } from '@angular/core';
import { Game, Grid } from 'src/app/life-core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  game: Game;
  grid: Grid;
  // speed go from 0 to 100
  speed = 20;
  speedDisabled = false;

  constructor() {
    this.game = Game.getInstance();
    this.grid = this.game.grid;
  }

  play() {
    this.speedDisabled = true;
    this.game.play(100, this.convertSpeedToMilliseconds(this.speed));
  }

  stop() {
    this.game.stop();
    this.speedDisabled = false;
  }

  private convertSpeedToMilliseconds(speed: number): number {
    return (100 - speed) * 10;
  }

}
