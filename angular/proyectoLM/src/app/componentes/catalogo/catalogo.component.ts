import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  listaProductos = [
    {
      nombre: 'Guitarra Eléctrica Stratocaster Fender',
      precio: 240,
      imagen: 'assets/imagen-de-guitarra-fender.jpg'
    },
    {
      nombre: 'Bajo Electrico Ibanez',
      precio: 210,
      imagen: 'assets/bajo-ibanez.jpg'
    },
    {
      nombre: 'Guitarra Eléctrica SG Gibson',
      precio: 250,
      imagen: 'assets/Gibson-SG-Guitarra.jpg'
    }
  ];
}

