import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  $loading : Observable<any>;
  constructor( private authService:AuthService, public store : Store<AppState>) { }

  ngOnInit() {
    this.$loading = this.store.select('ui');
  }

  onSubmit(value:any){
    console.log(value);
    this.authService.createdUser(value.nombre,value.email,value.password)
    
  }
}
