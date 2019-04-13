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

  it('should set Cell to be alive', () => {
    const cell: Cell = new Cell();
    cell.isAlive = true;
    expect(cell.isAlive).toBeTruthy();
  });

  it('should set Cell to be dead', () => {
    const cell: Cell = new Cell();
    cell.isAlive = false;
    expect(cell.isAlive).toBeFalsy();
  });

  it('should have a string representation of an alive Cell (*)', () => {
    const cell: Cell = new Cell();
    cell.isAlive = true;
    expect(cell.toString()).toEqual('*');
  });

  it('should have a string representation of a dead Cell (.)', () => {
    const cell: Cell = new Cell();
    cell.isAlive = false;
    expect(cell.toString()).toEqual('.');
  });
});
