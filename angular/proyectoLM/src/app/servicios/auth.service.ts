import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios: any[] = [];
  private usuarioActivo: any = null;

  constructor() {}

  registrar(usuario: any): boolean {
    const existe = this.usuarios.find(u => u.email === usuario.email);
    if (existe) return false;
    this.usuarios.push(usuario);
    return true;
  }

  login(email: string, password: string): boolean {
    const usuario = this.usuarios.find(u => u.email === email && u.password === password);
    if (usuario) {
      this.usuarioActivo = usuario;
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioActivo = null;
  }

  obtenerUsuarioActivo() {
    return this.usuarioActivo;
  }

  estaAutenticado(): boolean {
    return this.usuarioActivo !== null;
  }
}

