import { Game } from './Game';
import { fakeAsync, flushMicrotasks } from '@angular/core/testing';

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

  it('should stop the Game even if and interval is set between each generation', fakeAsync(() => {
    spyOn(game.grid, 'next').and.callThrough();
    game.play(100, 100);
    expect(game.stop());
    expect(game.isRunning).toBeFalsy();
  }));

  it('should reset the Game and grid', () => {
    const previousGeneration = game.grid;
    game.reset();
    expect(game.grid).not.toEqual(previousGeneration);
  });

  it('should reset the Game call stop function', () => {
    spyOn(game, 'stop');
    game.reset();
    expect(game.stop).toHaveBeenCalled();
  });

  afterEach(() => {
    expect(game.stop());
  });
});
