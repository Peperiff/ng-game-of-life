import { Grid } from './Grid';

describe('Grid', () => {
  beforeEach(() => {
    // nothing yet
  });

  it('should create Grid', () => {
    const grid: Grid = new Grid(2, 2);
    expect(grid).toBeTruthy();
  });
});
