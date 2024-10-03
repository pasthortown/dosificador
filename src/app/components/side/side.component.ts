import { Component } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [ItemComponent, UserComponent],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss'
})
export class SideComponent {
  recipe_selected: any = null;
  recipes: any[] = [
    {
      titulo:"receta_1",
      ingredientes:[],
      codigo_material: '18000223', //blanco
    },
    {
      titulo:"receta_2",
      ingredientes:[],
      codigo_material: '18000224', //verde
    },
    {
      titulo:"receta_1",
      ingredientes:[],
      codigo_material: '18000223', //blanco
    },
    {
      titulo:"receta_2",
      ingredientes:[],
      codigo_material: '18000224', //verde
    },
    {
      titulo:"receta_1",
      ingredientes:[],
      codigo_material: '18000223', //blanco
    },
    {
      titulo:"receta_2",
      ingredientes:[],
      codigo_material: '18000224', //verde
    },
    {
      titulo:"receta_1",
      ingredientes:[],
      codigo_material: '18000223', //blanco
    },
    {
      titulo:"receta_2",
      ingredientes:[],
      codigo_material: '18000224', //verde
    },
    {
      titulo:"receta_1",
      ingredientes:[],
      codigo_material: '18000223', //blanco
    },
    {
      titulo:"receta_2",
      ingredientes:[],
      codigo_material: '18000224', //verde
    },
  ];
}
