import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  $user : Observable<any>;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.$user =this.store.select('auth')
      .pipe(
        map((auth) =>{           
          return auth.user
        })
      );
  }

}
