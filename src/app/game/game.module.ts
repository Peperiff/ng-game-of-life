import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { GameComponent } from './game/game.component';
import { GridComponent } from './game/grid/grid.component';

@NgModule({
  declarations: [
    GameComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
