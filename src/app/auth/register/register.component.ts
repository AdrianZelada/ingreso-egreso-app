import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor( private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
    this.authService.createdUser(value.nombre,value.email,value.password)
    
  }
}
