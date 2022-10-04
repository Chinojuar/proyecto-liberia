import { WebComponent } from './web.component';
import { RegistroUsuariosComponent } from './paginas/usuarios/registro-usuarios/registro-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroLibrosComponent} from './paginas/administracion/registro-libros/registro-libros.component'

const routes: Routes = [
  {
path:'',
component:WebComponent,
children: [
    {
      path:'registro-libros',
      component:RegistroLibrosComponent
  },
  {
    path:'registro-usuarios',
    component:RegistroUsuariosComponent
  }
],
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
