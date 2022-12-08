
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario = new Usuario();


  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log('testando se a api ta chamando mesmo',this.usuario)
    this.authService.fazerLogin(this.usuario)
  }

}
