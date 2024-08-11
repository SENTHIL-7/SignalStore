import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdrefComponent } from './cdref/cdref.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CdrefComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signalStore';
}
