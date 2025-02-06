import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categoria',
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  @Input() habilidades: string[] = [];  


}
