import { Grid } from './Grid';

describe('Grid', () => {
  beforeEach(() => {
    // nothing yet
  });

  it('should create Grid', () => {
    const grid: Grid = new Grid();
    expect(grid).toBeTruthy();
  });

  it('should create Grid with Cells', () => {
    const grid: Grid = new Grid(4, 2);
    expect(grid.grid[1][3]).toBeDefined();
  });

  it('should create a 4x8 Grid if width or height are not number > 0', () => {
    const grid: Grid = new Grid(0, 2);
    expect(grid.width).toEqual(8);
    expect(grid.height).toEqual(2);

    const grid2: Grid = new Grid(-3, null);
    expect(grid2.width).toEqual(8);
    expect(grid2.height).toEqual(4);

    const grid3: Grid = new Grid(-3, undefined);
    expect(grid3.width).toEqual(8);
    expect(grid3.height).toEqual(4);
  });

  it('should have a string representation of a Grid', () => {
    const grid: Grid = new Grid();
    expect(grid.toString()).not.toBeNull();
  });

  describe('Counting neighbours on 5x5 grid', () => {
    const grid: Grid = new Grid(5, 5);
    /**
     * |*.*..|
     * |...*.|
     * |*..**|
     * |*....|
     * |.*.**|
     */
    // 1st row
    grid.grid[0][0].isAlive = true;
    grid.grid[0][1].isAlive = false;
    grid.grid[0][2].isAlive = true;
    grid.grid[0][3].isAlive = false;
    grid.grid[0][4].isAlive = false;
    // 2nd row
    grid.grid[1][0].isAlive = false;
    grid.grid[1][1].isAlive = false;
    grid.grid[1][2].isAlive = false;
    grid.grid[1][3].isAlive = true;
    grid.grid[1][4].isAlive = false;
    // 3rd row
    grid.grid[2][0].isAlive = true;
    grid.grid[2][1].isAlive = false;
    grid.grid[2][2].isAlive = false;
    grid.grid[2][3].isAlive = true;
    grid.grid[2][4].isAlive = true;
    // 4th row
    grid.grid[3][0].isAlive = true;
    grid.grid[3][1].isAlive = false;
    grid.grid[3][2].isAlive = false;
    grid.grid[3][3].isAlive = false;
    grid.grid[3][4].isAlive = false;
    // 5th row
    grid.grid[4][0].isAlive = false;
    grid.grid[4][1].isAlive = true;
    grid.grid[4][2].isAlive = false;
    grid.grid[4][3].isAlive = true;
    grid.grid[4][4].isAlive = true;

    it('should count living neighbours of a Cell at (0, 0)', () => {
      expect(grid.countLivingNeighboursAt(0, 0)).toEqual(0);
    });

    it('should count living neighbours of a Cell at (0, 1)', () => {
      expect(grid.countLivingNeighboursAt(0, 1)).toEqual(2);
    });

    it('should count living neighbours of a Cell at (0, 2)', () => {
      expect(grid.countLivingNeighboursAt(0, 2)).toEqual(1);
    });

    it('should count living neighbours of a Cell at (0, 3)', () => {
      expect(grid.countLivingNeighboursAt(0, 3)).toEqual(2);
    });

    it('should count living neighbours of a Cell at (0, 4)', () => {
      expect(grid.countLivingNeighboursAt(0, 4)).toEqual(1);
    });

    it('should count living neighbours of a Cell at (1, 0)', () => {
      expect(grid.countLivingNeighboursAt(1, 0)).toEqual(2);
    });

    it('should count living neighbours of a Cell at (1, 1)', () => {
      expect(grid.countLivingNeighboursAt(1, 1)).toEqual(3);
    });

    it('should count living neighbours of a Cell at (1, 2)', () => {
      expect(grid.countLivingNeighboursAt(1, 2)).toEqual(3);
    });

    it('should count living neighbours of a Cell at (2, 2)', () => {
      expect(grid.countLivingNeighboursAt(2, 2)).toEqual(2);
    });

    it('should count living neighbours of a Cell at (4, 0)', () => {
      expect(grid.countLivingNeighboursAt(4, 0)).toEqual(2);
    });

    it('should count living neighbours of a Cell at (4, 2)', () => {
      expect(grid.countLivingNeighboursAt(4, 2)).toEqual(2);
    });

    it('should count living neighbours of a Cell at (4, 4)', () => {
      expect(grid.countLivingNeighboursAt(4, 4)).toEqual(1);
    });
  });
});
