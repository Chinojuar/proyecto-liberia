import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AdministracionComponent } from './paginas/administracion/administracion.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { PrestamosComponent } from './paginas/prestamos/prestamos.component';
import { RegistroLibrosComponent } from './paginas/administracion/registro-libros/registro-libros.component';
import { RegistroUsuariosComponent } from './paginas/usuarios/registro-usuarios/registro-usuarios.component';
import { WebComponent } from './web.component';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { WebRoutingModule } from './web-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from '../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    NavBarComponent,
    AdministracionComponent,
    UsuariosComponent,
    PrestamosComponent,
    RegistroLibrosComponent,
    RegistroUsuariosComponent,
    WebComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    NzCollapseModule,
    NzLayoutModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
    
  
  ]
})
export class WebModule { }
