import { Grid } from './Grid';

describe('Grid', () => {
  beforeEach(() => {
    // nothing yet
  });

  it('should create Grid', () => {
    const grid: Grid = new Grid(2, 2);
    expect(grid).toBeTruthy();
  });

  it('should create a 4x8 Grid if width or height are not number > 0', () => {
    const grid: Grid = new Grid(0, 2);
    expect(grid.width).toEqual(8);
    expect(grid.height).toEqual(2);

    const grid2: Grid = new Grid(-3, null);
    expect(grid2.width).toEqual(8);
    expect(grid2.height).toEqual(4);

    const grid3: Grid = new Grid(-3, undefined);
    expect(grid2.width).toEqual(8);
    expect(grid2.height).toEqual(4);
  });
});
