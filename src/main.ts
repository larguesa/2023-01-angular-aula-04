import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { FlowComponent } from './flow/flow.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, FlowComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <hr/>
    <app-me></app-me>
    <hr/>
    <app-flow></app-flow>
  `,
})
export class App {
  name = 'TE II';
}

bootstrapApplication(App);
