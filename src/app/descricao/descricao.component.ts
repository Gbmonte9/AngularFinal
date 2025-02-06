import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descricao',
  imports: [],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {

  @Input() tempo_registrado: string = '';  
  @Input() tipo_trabalho: string = '';     
  @Input() localizacao: string = '';       
}
