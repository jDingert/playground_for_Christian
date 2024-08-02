import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FoodChooseScreenComponent } from "./components/food-choose-screen/food-choose-screen.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { ListeComponent } from "./components/liste/liste.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SearchbarComponent, SidebarComponent, FoodChooseScreenComponent, DataTableComponent, ListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QlarFoodApp';
  listItems: string[] = [];

  addItem(newItem: string) {
    if (newItem) {
      this.listItems.push(newItem);
    }
  }
}


