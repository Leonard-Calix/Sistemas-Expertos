import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* COMPONENTES */

import { AppComponent } from './components/principal/app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { NavbarService } from '@services/navbar.service';
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
import { CrearSitio2Component } from './components/usuario/crear-sitio2/crear-sitio2.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumenComponent } from './components/administracion/resumen/resumen.component';
import { MenuComponent } from './components/usuario/menu/menu.component';
import { LandingPage2Component } from './landing-page2/landing-page2.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { PrincipalComponent } from './templates/principal/principal.component';
import { MiSitiosComponent } from '@components/usuario/mi-sitios/mi-sitios.component';
import { MiBlogsComponent } from '@components/usuario/mi-blogs/mi-blogs.component';
import { CategoriaComponent } from '@components/administracion/categoria/categoria.component';
import { TemplateblogComponent } from './templateblog/templateblog.component';
import { ArchivosComponent } from '@components/administracion/archivos/archivos.component';
import { VideosComponent } from '@components/administracion/videos/videos.component';
import { AuthenticationGuard } from './guardianes/authentication.guard';
import { AuthenticationUserGuard } from './guardianes/authentication-user.guard';


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
        { path: 'perfil', component : PerfilComponent, canActivate: [AuthenticationUserGuard] },
        { path: 'sitios', component: VistaSitiosComponent },
        { path: 'blogs', component: VistaBlogsComponent },
        { path: 'crearSitio', component: CrearSitioComponent, canActivate: [AuthenticationUserGuard] },
        { path: 'crearBlog', component: CrearBlogComponent, canActivate: [AuthenticationUserGuard] },
        { path: 'crearBlogShourcouts/:id/:accion', component: CrearBlog2Component, canActivate: [AuthenticationUserGuard] },
        { path: 'crearSitioShourcouts/:id', component: CrearSitio2Component, canActivate: [AuthenticationUserGuard] },
        { path: 'sitiosUsuario', component: MiSitiosComponent, canActivate: [AuthenticationUserGuard] },
        { path: 'blogsUsuario', component: MiBlogsComponent, canActivate: [AuthenticationUserGuard] },

      ]
    },

    { path: 'admin', component: MainComponent, canActivate: [AuthenticationGuard],
      children:[
        { path : 'admin', pathMatch: 'full', redirectTo: 'admin/resumen' },
        { path : 'comentarios', component:  ComentariosComponent },
        { path : 'imagenes', component:  ImagenesComponent },
        { path : 'documentos', component:  ArchivosComponent },
        { path : 'videos', component:  VideosComponent },
        { path : 'subirArchivo', component:  SubirImagenComponent },
        { path : 'usuarios', component: UsuariosComponent },
        { path : 'perfil', component: PerfilComponent },
        { path : 'paginas', component: PaginasWebComponent },
        { path : 'blog', component: BlogComponent },
        { path : 'nueva', component: NuevaPaginaComponent },
        { path : 'nuevo', component: NuevoBlogComponent },
        { path : 'resumen', component: ResumenComponent },
        { path : 'categoria', component: CategoriaComponent }

      ]
    },
    { path : 'template/:id/:contenido', component: PrincipalComponent },
    { path : 'plantillaBlogs/:id/:contenido/:titulo', component: TemplateblogComponent },


    

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
