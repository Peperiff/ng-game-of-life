import { Game } from './Game';

describe('Game', () => {
  let game: Game;
  beforeEach(() => {
    game = Game.getInstance();
  });

  it('should create Game', () => {
    expect(game).toBeTruthy();
  });

  it('should play Game', () => {
    expect(game.play());
  });

  it('should play Game for 3 iterations', () => {
    spyOn(game.grid, 'next').and.callThrough();
    game.play(3);
    expect(game.grid.next).toHaveBeenCalledTimes(3);
  });

  it('should get if the Game is finished or not', () => {
    expect(game.isRunning).not.toBeNull();
  });

  it('should stop the Game', () => {
    expect(game.stop());
    expect(game.isRunning).toBeFalsy();
  });

  afterEach(() => {
    expect(game.stop());
  });
});
