import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  correo = ' ';
  contrasenia: ' '; 
  error = false;

  constructor( private router:Router, private auth: AuthenticationService ) { }

  ngOnInit(): void {

  }

  login(){

    let usuario = {
      correo: this.correo,
      contrasenia: this.contrasenia
    }

    this.auth.loginAdmin(usuario).subscribe( (data:any) => {

      if(data.length > 0){
        console.log(data);

        this.auth.setEsAdmin();
        this.auth.setUsuario(data[0]._id);
        this.auth.getEsAdmin();
        this.auth.getUsuario();

        this.router.navigate(['/admin/resumen']);

      }else{
        this.error = true;
      }

    });

  }

}
