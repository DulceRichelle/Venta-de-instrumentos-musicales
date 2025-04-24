import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { LoginComponent } from './componentes/login/login.component';
<<<<<<< HEAD
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { PagoComponent } from './components/pago/pago.component';
=======
>>>>>>> c7a08ad3d814d3a054b2920846aa1dbdb3018689

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', component: PageNotFoundComponent}
];

