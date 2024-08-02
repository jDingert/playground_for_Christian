import { NgFor } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";


@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [NgFor, ButtonComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {

  @Input() items: string[] = [];

  //Chef Code
  addItem(newItem: string) {
    this.items.push(newItem);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
