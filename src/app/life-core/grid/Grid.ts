import { Cell } from '../agent/Cell';

/**
 * A simple 2D Grid object containing population of cells for theConway's Game of Life.
 */
export class Grid {
  private _grid: Cell[][];
  private _width: number;
  private _height: number;

  /**
   * Construct a grid of cells.
   * If the width is not a number greater than 0, the default width is 8.
   * If the height is not a number greater than 0, the default height is 4.
   * @param width width of the grid
   * @param height height of the grid
   */
  constructor(width?: number, height?: number) {
    this._width = (width !== null && width !== undefined && width > 0) ? width : 8;
    this._height = (height !== null && height !== undefined && height > 0) ? height : 4;
    this._grid = [];
    for (let i = 0; i < this._height; i++) {
      this._grid[i] = [];
      for (let j = 0; j < this._width; j++) {
        this._grid[i][j] = new Cell();
      }
    }
  }

  public get grid(): Cell[][] {
    return this._grid;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public toString(): string {
    let result = '';
    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._width; j++) {
        result += this._grid[i][j].toString();
      }
      // add break line if not the last line
      if (i < this._height - 1) {
        result += '\n';
      }
    }
    return result;
  }
}
