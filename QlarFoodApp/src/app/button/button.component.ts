import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  //ButtonSearch: string ="Suche";
  //ButtonHome: string ="Home";

  @Input() label: string = 'Default';
}
