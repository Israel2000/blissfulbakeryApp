import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageBakeryComponent } from "./homepage-bakery/homepage-bakery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageBakeryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blissfulpastryApp';
}
