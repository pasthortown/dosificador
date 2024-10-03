import { Component } from '@angular/core';
import { ElementComponent } from "./element/element.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [ElementComponent, CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  ingredient_selected: any = null;

  ingredients: any[] = [
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 50
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 2 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5 ,
      peso_balanza: 45
    },
    {
      orden: 1,
      nombre: 'mortiño',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    },
    {
      orden: 2,
      nombre: 'mora',
      cantidad: 50,
      unidad: 'g',
      desviacion: 5,
      peso_balanza: 0
    }
  ];

  recipe: any = {
    titulo:"receta_1",
    ingredientes:[],
    codigo_material: '18000223', //blanco
  };
}
