import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrarse() {
    const exito = this.auth.registrar({ nombre: this.nombre, email: this.email, password: this.password });
    if (exito) {
      alert('Registro exitoso');
      this.router.navigate(['/login']);
    } else {
      alert('Ese email ya está registrado');
    }
  }
}

