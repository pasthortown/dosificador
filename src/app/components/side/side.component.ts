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

}
