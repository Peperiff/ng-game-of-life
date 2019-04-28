import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    });
    TestBed.overrideTemplate(GameComponent, '');
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should play', () => {
    spyOn(component.game, 'play');
    component.play();
    expect(component.game.play).toHaveBeenCalled();
  });

  it('should stop', () => {
    spyOn(component.game, 'stop');
    component.stop();
    expect(component.game.stop).toHaveBeenCalled();
  });

  it('should reset', () => {
    spyOn(component.game, 'reset');
    component.reset();
    expect(component.game.reset).toHaveBeenCalled();
  });
});
