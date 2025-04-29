import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  limpiarCarrito() {
    this.productos = [];
  }
}

