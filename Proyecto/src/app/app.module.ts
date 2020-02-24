import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { NavbarService } from '@services/navbar.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/administracion/main/main.component';
import { ComentariosComponent } from '@components/administracion/comentarios/comentarios.component';
import { ImagenesComponent } from './components/administracion/imagenes/imagenes.component';
import { SubirImagenComponent } from '@components/administracion/subir-imagen/subir-imagen.component';
import { LoginAdminComponent } from '@components/administracion/login-admin/login-admin.component';
import { IndexComponent } from './components/index/index.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { PerfilComponent } from './components/administracion/perfil/perfil.component';
import { PaginasWebComponent } from './components/administracion/paginas-web/paginas-web.component';
import { BlogComponent } from './components/administracion/blog/blog.component';
import { NuevaPaginaComponent } from './components/administracion/nueva-pagina/nueva-pagina.component';
import { NuevoBlogComponent } from './components/administracion/nuevo-blog/nuevo-blog.component';


import { UsuarioService } from "@services/usuario.service";
import { ResumenComponent } from './components/administracion/resumen/resumen.component';
import { MenuComponent } from './components/usuario/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    CrearUsuarioComponent,
    LoginComponent,
    MainComponent,
    ImagenesComponent,
    SubirImagenComponent,
    IndexComponent,
    UsuariosComponent,
    PerfilComponent,
    PaginasWebComponent,
    BlogComponent,
    NuevaPaginaComponent,
    NuevoBlogComponent,
    ResumenComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: '**', redirectTo: 'index'},
      { path: '', component: LandingPageComponent },
      { path: 'nav', component: NavbarComponent },
      { path: 'loginAdmin', component: LoginAdminComponent },
      { path: 'registro/:plan', component: CrearUsuarioComponent },
      { path: 'login', component: LoginComponent },


      { path: 'index', component: IndexComponent ,
        children:[
          { path: 'perfil', component : PerfilComponent },
        ]
      },


      { path: 'admin', component: MainComponent,
        children:[
          { path : 'admin', pathMatch: 'prefix', redirectTo: 'admin/resumen' },
          { path : 'comentarios', component:  ComentariosComponent },
          { path : 'imagenes', component:  ImagenesComponent },
          { path : 'subirImg', component:  SubirImagenComponent },
          { path : 'usuarios', component: UsuariosComponent },
          { path : 'perfil', component: PerfilComponent },
          { path : 'paginas', component: PaginasWebComponent },
          { path : 'blog', component: BlogComponent },
          { path : 'nueva', component: NuevaPaginaComponent },
          { path : 'nuevo', component: NuevoBlogComponent },
          { path : 'resumen', component: ResumenComponent }
        ]
      },
      

    ])
  ],
  providers: [
    NavbarService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
