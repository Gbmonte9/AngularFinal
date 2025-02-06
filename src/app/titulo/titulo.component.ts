import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {

  @Input() empresa: string = '';  
  @Input() cargo: string = '';    
  @Input() status: string = '';   

}
