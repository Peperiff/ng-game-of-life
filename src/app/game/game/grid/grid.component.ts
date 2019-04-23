import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/life-core/agent/Cell';

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
