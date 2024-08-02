import { Component } from '@angular/core';
import { CarouselComponent } from "../../units/carousel/carousel.component";
import { CardComponent } from "../../units/card/card.component";
import { ImagesComponent } from "../images/images.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardComponent, ImagesComponent, FooterComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HOMEComponent {

}
