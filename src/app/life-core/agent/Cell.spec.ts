import { Cell } from './Cell';

describe('Cell', () => {
  beforeEach(() => {
    // nothing yet
  });

  it('should create Cell', () => {
    const cell: Cell = new Cell();
    expect(cell).toBeTruthy();
  });

  it('should create Cell that is either alive or dead', () => {
    const cell: Cell = new Cell();
    expect(cell.isAlive).toBeDefined();
  });
});
