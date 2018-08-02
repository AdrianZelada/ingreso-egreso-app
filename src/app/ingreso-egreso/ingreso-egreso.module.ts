import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { StoreModule } from '../../../node_modules/@ngrx/store';
import { IngresoEgresoReducer } from './ingreso-egreso.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('ingresoEgreso',IngresoEgresoReducer)
  ],
  declarations: [
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    DashboardComponent,
    OrdenIngresoEgresoPipe
  ]
})
export class IngresoEgresoModule { }
