import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service'; // <-- importa el servicio



@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  listaProductos: any[] = [];

  constructor(private dataService: DataService, private router: Router, private carritoService: CarritoService) {}

  ngOnInit() {
    this.dataService.getProductos().subscribe(data => {
      this.listaProductos = data;
    });
  }

  anadirAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    console.log('Producto añadido:', producto);
    this.router.navigate(['/carrito']);
  }
}


