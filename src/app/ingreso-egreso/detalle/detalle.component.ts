import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ingreso-egreso.reducer';
import { Observable } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {
  $ingresoEgreso :Observable<any>;
  constructor(private store:Store<AppState>, public ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.$ingresoEgreso = this.store.select('ingresoEgreso')
  }

  delete(ingresoEgreso:any){
    
    this.ingresoEgresoService.delete(ingresoEgreso).then((data)=>{

    })
  }
}
