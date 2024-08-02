import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ImagesComponent } from "../images/images.component";
import { CarouselComponent } from '../../units/carousel/carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutComponent, FooterComponent, ImagesComponent,CarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
