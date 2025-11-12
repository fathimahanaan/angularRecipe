import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipes } from './components/recipes/recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recipes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('recipe');
}
