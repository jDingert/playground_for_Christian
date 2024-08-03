import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-homebar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './homebar.component.html',
  styleUrl: './homebar.component.scss'
})
export class HomebarComponent {

  @Input() label: string = 'Default';

}
