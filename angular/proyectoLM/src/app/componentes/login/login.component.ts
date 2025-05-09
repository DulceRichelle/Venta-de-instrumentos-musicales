import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  iniciarSesion() {
    const exito = this.auth.login(this.email, this.password);
    if (exito) {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/catalogo']);
      this.cdr.detectChanges();
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
