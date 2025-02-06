import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampoComponent } from './campo/campo.component';
import { FiltrarComponent } from './filtrar/filtrar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CampoComponent, FiltrarComponent],
  templateUrl: './app.component.html',
  styleUrl: 'node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class AppComponent {
  title = 'projeto-final';
}
