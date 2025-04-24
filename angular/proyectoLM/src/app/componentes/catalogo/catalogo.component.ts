import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  listaProductos: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProductos().subscribe(data => {
      this.listaProductos = data;
    });
  }
}


