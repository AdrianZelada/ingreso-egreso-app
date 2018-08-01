import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  $loading:Observable<any>;
  
  constructor(private authService:AuthService ,public store : Store<AppState>) { }

  ngOnInit() {
    this.$loading = this.store.select('ui');
  }

  login(data:any){
    this.authService.login(data.email,data.password);
  }

}