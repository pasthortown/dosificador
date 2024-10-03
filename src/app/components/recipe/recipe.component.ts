import { Component } from '@angular/core';
import { ElementComponent } from "./element/element.component";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [ElementComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

}
