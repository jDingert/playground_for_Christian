import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  //ButtonSearch: string ="Suche";
  //ButtonHome: string ="Home";
  
   @Input() Default: string ="Default";
   
}
