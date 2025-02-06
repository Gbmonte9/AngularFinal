import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { TituloComponent } from '../titulo/titulo.component';
import { DescricaoComponent } from '../descricao/descricao.component';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-campo',
  imports: [FotoComponent, TituloComponent, DescricaoComponent, CategoriaComponent],
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.css']
})
export class CampoComponent {
  
  @Input() empregos: any[] = [];
  
  vagaAberta: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empregos']) {
      console.log(this.empregos);  
      this.vagaAberta = this.empregos.length > 0;
    }
  }

}
