import { NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-food-choose-screen',
  standalone: true,
  imports: [NgFor],
  templateUrl: './food-choose-screen.component.html',
  styleUrl: './food-choose-screen.component.scss'
})
export class FoodChooseScreenComponent {

  @Input() Recipe_items: Recipe_item [] = [];
 

}

export interface Recipe_item {
  headline: string;
  account: string;
  views: string;
  thumpnail: string;
}
