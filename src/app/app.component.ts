import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./units/navbar/navbar.component";
import { CardComponent } from './units/card/card.component';
import { CONTACTComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { FooterComponent } from "./pages/footer/footer.component";
import { AboutComponent } from "./pages/about/about.component";
import { ImagesComponent } from "./pages/images/images.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardComponent, CONTACTComponent, CarouselComponent, FooterComponent, AboutComponent, ImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
