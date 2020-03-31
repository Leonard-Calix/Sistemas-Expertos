import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CKEditorModule   } from '@ckeditor/ckeditor5-angular';



/* COMPONENTES */
import { AppComponent } from './components/principal/app.component';
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
import { VistaSitiosComponent } from './components/vista-sitios/vista-sitios.component';
import { VistaBlogsComponent } from '@components/vista-blogs/vista-blogs.component';
import { CrearSitioComponent } from './components/usuario/crear-sitio/crear-sitio.component';
import { CrearBlogComponent } from './components/usuario/crear-blog/crear-blog.component';
import { CrearBlog2Component } from './components/usuario/crear-blog2/crear-blog2.component';
import { CrearSitio2Component } from './components/usuario/crear-sitio2/crear-sitio2.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumenComponent } from './components/administracion/resumen/resumen.component';
import { MenuComponent } from './components/usuario/menu/menu.component';
import { LandingPage2Component } from './landing-page2/landing-page2.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';
import { PrincipalComponent } from './templates/principal/principal.component';
import { Login2Component } from './templates/login/login.component';



/* SERVICIOS */

import { UsuarioService } from "@services/usuario.service";
import { CargaImagenesService } from '@services/carga-imagenes.service';
import { SitioService } from '@services/sitio.service';
import { BreadcrumbComponent } from './templates/breadcrumb/breadcrumb.component';
import { PiePaginaComponent } from './templates/pie-pagina/pie-pagina.component';
import { NavMenuComponent } from './templates/nav-menu/nav-menu.component';
import { ImagenComponent } from './templates/imagen/imagen.component';
import { GaleriaComponent } from './templates/galeria/galeria.component';
import { MiSitiosComponent } from './components/usuario/mi-sitios/mi-sitios.component';
import { MiBlogsComponent } from './components/usuario/mi-blogs/mi-blogs.component';
import { BlogService } from '@services/blog.service';
import { EnlaceComponent } from './templates/enlace/enlace.component';
import { HeadersComponent } from './templates/headers/headers.component';
import { CategoriaComponent } from './components/administracion/categoria/categoria.component';
import { CategoriaService } from '@services/categoria.service';







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
    VistaSitiosComponent,
    CrearSitioComponent,
    CrearBlogComponent,
    CrearBlog2Component,
    CrearSitio2Component,
    FooterComponent,
    LandingPage2Component,
    NoFoundComponent,
    NavBarComponent,
    PrincipalComponent,
    BreadcrumbComponent,
    PiePaginaComponent,
    NavMenuComponent,
    ImagenComponent,
    GaleriaComponent,
    MiSitiosComponent,
    MiBlogsComponent,
    EnlaceComponent,
    Login2Component,
    HeadersComponent,
    CategoriaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule
   
  ],
  providers: [
    NavbarService,
    UsuarioService,
    CargaImagenesService,
    SitioService,
    BlogService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
