
import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,RouterLink,MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = 'Ver más';
  @Input() buttonLink: string = '/';
  @Input() backgroundColor: string = '#4CAF50';  // Color de fondo por defecto
}
