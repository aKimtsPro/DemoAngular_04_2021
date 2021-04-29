import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    builder: FormBuilder, 
    private service: SessionService, 
    private router: Router
  ) {
    this.loginForm = builder.group({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
   }

  ngOnInit(): void {
  }

  onLogin() {
    if( this.loginForm.valid )
      this.service.login( this.loginForm.value )
                  .subscribe( () => this.router.navigateByUrl("/accueil") )
  }
  
  isLogged(){
    return this.service.isLogged();
  }

}
