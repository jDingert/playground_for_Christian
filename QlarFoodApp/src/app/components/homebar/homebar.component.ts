import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-homebar',
  standalone: true,
  imports: [ButtonComponent, NgFor],
  templateUrl: './homebar.component.html',
  styleUrl: './homebar.component.scss'
})
export class HomebarComponent {

  @Input() items: string[] = [];

}
