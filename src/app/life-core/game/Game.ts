import { Grid } from '../grid/Grid';

const DEFAULT_GAME_ITERATIONS = 10;

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
   */
  public play(iterations?: number): void {
    let remainingIterations = iterations ? iterations : DEFAULT_GAME_ITERATIONS;
    if (!this._isRunning) {
      this._isRunning = true;
      while (this.isRunning) {
        if (!(remainingIterations > 1)) {
          this.stop();
        }
        remainingIterations = remainingIterations - 1;
        console.log(this._grid.toString());
        this._grid.next();
      }
    }
  }

  /**
   * Stop current game
   */
  public stop(): void {
    this._isRunning = false;
  }

  public get grid(): Grid {
    return this._grid;
  }

  public get isRunning(): boolean {
    return this._isRunning;
  }
}
