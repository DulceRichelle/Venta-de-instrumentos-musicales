import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private carritoService: CarritoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getProductos().subscribe((productos: any[]) => {
      this.producto = productos.find(p => p.id == id);
    });
  }
  
  agregarAlCarrito() {
    if (this.producto) {
      this.carritoService.agregarProducto(this.producto);
      alert('Producto añadido al carrito');
    }
  }
}

