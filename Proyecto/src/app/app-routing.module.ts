import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* COMPONENTES */

import { AppComponent } from './components/principal/app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { NavbarService } from '@services/navbar.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
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
import { MisSitiosComponent } from './components/usuario/mis-sitios/mis-sitios.component';
import { MisBlogsComponent } from './components/usuario/mis-blogs/mis-blogs.component';
import { CrearSitio2Component } from './components/usuario/crear-sitio2/crear-sitio2.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumenComponent } from './components/administracion/resumen/resumen.component';
import { MenuComponent } from './components/usuario/menu/menu.component';
import { LandingPage2Component } from './landing-page2/landing-page2.component';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
    //{ path: '**', redirectTo: 'index'},
    { path: '', component: LandingPage2Component },
    //{ path: '**', pathMatch: 'prefix', redirectTo: 'noFound' },
    { path: 'noFound', component: NoFoundComponent },
    { path: 'nav', component: NavbarComponent },
    { path: 'registro', component: CrearUsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'loginAdmin', component: LoginAdminComponent },
    { path: 'inicio', component: LandingPage2Component },

    
    { path: 'index', component: IndexComponent ,
      children:[
        { path: 'perfil', component : PerfilComponent },
        { path: 'sitios', component: VistaSitiosComponent },
        { path: 'blogs', component: VistaBlogsComponent },
        { path: 'crearSitio', component: CrearSitioComponent },
        { path: 'crearBlog', component: CrearBlogComponent },
        { path: 'crearBlogShourcouts', component: CrearBlog2Component },
        { path: 'misSitios', component: MisSitiosComponent },
        { path: 'misBlogs', component: MisBlogsComponent },
        { path: 'crearSitioShourcouts', component: CrearSitio2Component },
      ]
    },

    { path: 'admin', component: MainComponent,
      children:[
        { path : 'admin', pathMatch: 'full', redirectTo: 'admin/resumen' },
        { path : 'comentarios', component:  ComentariosComponent },
        { path : 'imagenes', component:  ImagenesComponent },
        { path : 'subirImg', component:  SubirImagenComponent },
        { path : 'usuarios', component: UsuariosComponent },
        { path : 'perfil', component: PerfilComponent },
        { path : 'paginas', component: PaginasWebComponent },
        { path : 'blog', component: BlogComponent },
        { path : 'nueva', component: NuevaPaginaComponent },
        { path : 'nuevo', component: NuevoBlogComponent },
        { path : 'resumen', component: ResumenComponent },

      ]
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
