import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from "./components/recipe/recipe.component";
import { SideComponent } from "./components/side/side.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeComponent, SideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dosificador';
}
