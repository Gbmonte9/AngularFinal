import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filtrar',
  imports: [],
  templateUrl: './filtrar.component.html',
  styleUrl: './filtrar.component.css'
})
export class FiltrarComponent {

  @Input() empregos: any[] = []; 
  @Output() updatedEmpregos = new EventEmitter<any[]>(); 

  filteredEmpregos: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empregos']) {
      this.filteredEmpregos = [...this.empregos]; 
      this.updatedEmpregos.emit(this.filteredEmpregos); 
    }
  }

  frontendFilter() {
    this.filteredEmpregos = this.empregos.filter(emplo => emplo.habilidades.includes('Frontend'));
    this.updatedEmpregos.emit(this.filteredEmpregos);  
  }

  cssFilter() {
    this.filteredEmpregos = this.empregos.filter(emplo => emplo.habilidades.includes('CSS'));
    this.updatedEmpregos.emit(this.filteredEmpregos);  
  }

  javascriptFilter() {
    this.filteredEmpregos = this.empregos.filter(emplo => emplo.habilidades.includes('JavaScript'));
    this.updatedEmpregos.emit(this.filteredEmpregos);  
  }

  clear() {
    this.filteredEmpregos = [...this.empregos]; 
    this.updatedEmpregos.emit(this.filteredEmpregos);  
  }
  
}
