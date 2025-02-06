import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { TituloComponent } from '../titulo/titulo.component';
import { DescricaoComponent } from '../descricao/descricao.component';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-campo',
  imports: [FotoComponent, TituloComponent, DescricaoComponent, CategoriaComponent],
  templateUrl: './campo.component.html',
  styleUrl: './campo.component.css'
})
export class CampoComponent {

}
