import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../life-core/agent/Cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  grid: Cell[][];

  constructor() { }

  ngOnInit() {
  }

}
