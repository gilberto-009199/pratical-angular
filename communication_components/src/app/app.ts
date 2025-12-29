import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input } from './input/input';
import { Output } from "./output/output";
import { Bidirecional } from "./bidirecional/bidirecional";
import { ServiceShared } from './service-shared/service-shared';

@Component({
  selector: 'app-root',
  imports: [Input, Output, Bidirecional, ServiceShared],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
