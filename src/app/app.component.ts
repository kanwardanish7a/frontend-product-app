import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Tell Angular it's a standalone component
  imports: [RouterOutlet, ProductListComponent], // ✅ Declare child components and directives used
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fixed typo from styleUrl → styleUrls
})
export class AppComponent {
  title = 'product-app';
}
