import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {
  $ingresoEgreso :Observable<any>;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.$ingresoEgreso = this.store.select('ingresoEgreso')
  }

  delete(uid:string){
    console.log(uid);
  }
}
