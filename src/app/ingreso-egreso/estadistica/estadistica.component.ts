import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../ingreso-egreso.reducer'
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ingresoegreso } from '../ingresoEgreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  $ingresoEgreso : Observable<any>;
  public doughnutChartLabels:string[] = ['Ingresos','Egresos'];
  public doughnutChartData:number[] = [];
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.$ingresoEgreso = this.store.select('ingresoEgreso').pipe(
      map((data)=>{        
        let values = data.items.reduce((result:any,item:ingresoegreso)=>{        
          if(item.type == 'ingreso'){
            result.sumIngresos = result.sumIngresos ? result.sumIngresos + item.amount : item.amount;
            result.countIngresos = result.countIngresos ? result.countIngresos + 1 : 1; 
          }else{
            result.sumEgresos = result.sumEgresos ? result.sumEgresos + item.amount : item.amount;
            result.countEgresos = result.countEgresos ? result.countEgresos + 1 : 1; 
          }
          return result;
        },{})      
        return values;
      })
    )
  }

}
