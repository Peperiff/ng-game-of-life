import { Cell } from '../agent/Cell';

/**
 * A simple 2D Grid object containing population of cells for the Conway's Game of Life.
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

  /**
   * Make the next generation
   */
  public next(): void {
    this._grid = this.getNextGeneration(this._grid);
  }

  /**
   * Given a grid of cells, will return the next generation.
   * 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   * 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   * 3. Any live cell with two or three live neighbours lives on to the next generation.
   * 4. Any dead cell with exactly three live neighbours becomes a live cell.
   * @param currentGeneration curent generation
   */
  public getNextGeneration(currentGeneration: Cell[][]): Cell[][] {
    const nextGeneration: Cell[][] = [];
    for (let i = 0; i < this._height; i++) {
      nextGeneration[i] = [];
      for (let j = 0; j < this._width; j++) {
        nextGeneration[i][j] = new Cell();
      }
    }
    let neighbours: number;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        neighbours = this.countLivingNeighboursAt(i, j);
        // set default value same as previous generation
        nextGeneration[i][j].isAlive = currentGeneration[i][j].isAlive;
        if (this.cellExistAndAlive(currentGeneration[i][j]) && neighbours < 2) {
          nextGeneration[i][j].isAlive = false; // #1
        } else if (this.cellExistAndAlive(currentGeneration[i][j]) && neighbours > 3) {
          nextGeneration[i][j].isAlive = false; // #2
        } else if (this.cellExistAndAlive(currentGeneration[i][j]) && neighbours >= 2 && neighbours <= 3) {
          nextGeneration[i][j].isAlive = true; // #3
        } else if (!this.cellExistAndAlive(currentGeneration[i][j]) && neighbours === 3) {
          nextGeneration[i][j].isAlive = true; // #4
        }
      }
    }
    return nextGeneration;
  }

  /**
   * Return the number of living cells around a Cell at a given position.
   * @param row row
   * @param column column
   */
  public countLivingNeighboursAt(row, column): number {
    let result = 0;
    result = this.cellExistAndAlive(this.pickUpCellAt(row, column + 1)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row + 1, column + 1)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row + 1, column)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row + 1, column - 1)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row, column - 1)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row - 1, column - 1)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row - 1, column)) ? result + 1 : result;
    result = this.cellExistAndAlive(this.pickUpCellAt(row - 1, column + 1)) ? result + 1 : result;
    return result;
  }

  private pickUpCellAt(row, column): Cell|undefined {
    if (row >= this.height || row < 0 || column >= this.width || column < 0) {
      return undefined;
    }
    return this._grid[row][column];
  }

  private cellExistAndAlive(cell: Cell): boolean {
    return cell && cell !== undefined && cell.isAlive;
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
