import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FoodChooseScreenComponent } from "./food-choose-screen/food-choose-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SearchbarComponent, SidebarComponent, FoodChooseScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QlarFoodApp';
}

