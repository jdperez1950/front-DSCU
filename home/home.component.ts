import { Component } from '@angular/core';
import { CoverImgComponent } from '../shared/components/cover-img/cover-img.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoverImgComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
