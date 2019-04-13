/**
 * A simple Cell object of Conway's Game of Life.
 */
export class Cell {
  private _isAlive: boolean;
  constructor() {
    // initialize with a random boolean
    this._isAlive = Math.random() >= 0.5;
  }

  get isAlive(): boolean {
    return this._isAlive;
  }

  set isAlive(isAlive: boolean) {
    this._isAlive = isAlive;
  }

  public toString(): string {
    return this.isAlive ? '*' : '.';
  }
}
