import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  myName: string;

  n = 10;

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(i);
    }
    return arr;
  }

  constructor() {
    this.myName = 'Ricardo';
  }

  ngOnInit() {}
}
