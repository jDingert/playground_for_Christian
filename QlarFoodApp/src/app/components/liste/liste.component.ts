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

  items: string[] = [];

  //Chef Code
  addItem(newItem: string) {
    debugger;
    console.log(newItem)
    this.items.push(newItem);
  }

  removeItem(index: number) {
    const test=this.items;
    console.log(test)
    debugger;
    this.items.splice(index, 1);
    console.log(this.items)
    console.log(index)
  }
}
