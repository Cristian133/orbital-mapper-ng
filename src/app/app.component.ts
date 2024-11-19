import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoidComponent } from '@shared/components/void/void.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VoidComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'orbital-mapper';
}
