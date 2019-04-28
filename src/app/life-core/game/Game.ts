import { Grid } from '../grid/Grid';

// number of iterations before the game end
const DEFAULT_GAME_ITERATIONS = 100;

/**
 * Represent a game, singleton.
 * You can :
 * - play
 * - stop
 */
export class Game {
  private static _instance: Game;
  private _grid: Grid;
  private _isRunning: boolean;
  // timer returned by setInterval function
  private timer: any;

  private constructor() {
    this._grid = new Grid();
  }

  public static getInstance(): Game {
    if (this._instance === null || this._instance === undefined) {
      this._instance = new Game();
    }
    return this._instance;
  }

  /**
   * Play a new game.
   * @param iterations number of iteration of the game
   * (optionnal, use DEFAULT_GAME_ITERATIONS constant by default)
   * @param interval duration between each generation (milliseconds)
   * (optionnal, use DEFAULT_GAME_INTERVAL constant by default)
   */
  public play(iterations?: number, interval?: number): void {
    let remainingIterations = iterations ? iterations : DEFAULT_GAME_ITERATIONS;
    const ms = interval ? interval : 0;
    if (!this._isRunning) {
      this._isRunning = true;
      if (ms > 0) {
        // used an interval of time between each generation
        this.timer = setInterval(() => {
          // stop when game is not running and no iteration remains
          if (! this.isRunning && !(remainingIterations > 1)) {
            this.stop();
          }
          remainingIterations = remainingIterations - 1;
          console.log('Game\n' + this._grid.toString());
          this._grid.next();
        }, ms);
      } else {
        // run game without interval
        while (this.isRunning) {
          // stop game if no iteration remains
          if (!(remainingIterations > 1)) {
            this.stop();
          }
          remainingIterations = remainingIterations - 1;
          console.log('Game\n' + this._grid.toString());
          this._grid.next();
        }
      }
    }
  }

  /**
   * Stop current game
   */
  public stop(): void {
    this._isRunning = false;
    if (undefined !== this.timer && null !== this.timer) {
      clearInterval(this.timer);
    }
  }

  /**
   * Reset the game.
   * If a game is running the game is stopped. The grid is also reinitialised.
   */
  public reset(): void {
    this.stop();
    this._grid = new Grid();
  }

  public get grid(): Grid {
    return this._grid;
  }

  public get isRunning(): boolean {
    return this._isRunning;
  }
}
