import { Component, signal } from '@angular/core';
import { RouterOutlet, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'Hellow Word do App.ts';

}
