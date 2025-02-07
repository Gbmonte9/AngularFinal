import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampoComponent } from './campo/campo.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CampoComponent, FiltrarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-final';

  empregos: any[] = [];

  constructor(private http: HttpClient) {
    this.carregarEmprego();
  }

  carregarEmprego() {
    this.http.get<any[]>('/json/emprego.json').subscribe(data => {
      this.empregos = data;  
      console.log(this.empregos); 
    });
  }

  empregosFiltrados: any[] = [...this.empregos];  

  atualizarEmpregos(empregosFiltrados: any[]) {
    this.empregosFiltrados = empregosFiltrados;  
  }

}
