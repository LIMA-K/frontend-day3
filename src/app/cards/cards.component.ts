import { Component, Input } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {





  @Input() title="default"

@Input() image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCW_jM37Re_2SEbofBhJWnV2lXSGaLWgKTw&s"
}