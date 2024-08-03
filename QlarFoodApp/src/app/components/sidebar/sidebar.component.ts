import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  @Input() text: string = 'Default';
}