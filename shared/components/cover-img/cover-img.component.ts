import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cover-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover-img.component.html',
  styleUrl: './cover-img.component.css'
})
export class CoverImgComponent {
  @Input() imageSrc: string = '';
  @Input() height: number = 300;
  @Input() textPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'left-center' | 'right-center' = 'center';
}
