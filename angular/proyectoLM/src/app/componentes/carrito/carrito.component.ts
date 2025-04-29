import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosCarrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.productosCarrito = this.carritoService.obtenerProductos();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.productosCarrito.reduce((sum, item) => sum + item.precio, 0);
  }

  vaciarCarrito() {
    this.carritoService.limpiarCarrito();
    this.productosCarrito = [];
    this.total = 0;
  }

  obtenerTotal(): number {
    return this.productosCarrito.reduce((total, producto) => total + producto.precio, 0);
  }

  eliminarProducto(index: number) {
    this.productosCarrito.splice(index, 1);
  }

  

}
