import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-food-choose-screen',
  standalone: true,
  imports: [],
  templateUrl: './food-choose-screen.component.html',
  styleUrl: './food-choose-screen.component.scss'
})
export class FoodChooseScreenComponent {

  @Input() Headline: string = 'Default';
  @Input() Account: string = 'Default';
  @Input() Views: string = 'Default';
  @Input() Thumpnail: string = 'Default';

}
