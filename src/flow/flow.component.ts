import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})
export class FlowComponent implements OnInit {
  n: number = 10;
  arr: number[];

  constructor() {}

  ngOnInit() {}

  update(){
    this.arr = [];
    for (let i = 1; i <= this.n; i++) {
      this.arr.push(Math.trunc(100 * Math.random()));
    }
  }

  getNumbers() {
    return this.arr;
  }
}
