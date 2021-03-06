import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { map } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  $user:Observable<any>
  constructor(
    private authService:AuthService,
    private store:Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) { }

  ngOnInit() {
    this.$user =this.store.select('auth')
      .pipe(
        map((auth) =>{           
          return auth.user
        })
      );  
  }

  logout(){
    this.authService.logout();
    this.ingresoEgresoService.unSubcription();
  }

}
