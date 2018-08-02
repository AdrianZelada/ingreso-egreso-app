import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import { map } from '../../../../node_modules/rxjs/operators';

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
