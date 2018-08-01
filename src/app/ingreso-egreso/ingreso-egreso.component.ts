import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ingresoegreso } from './ingresoEgreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Observable } from 'rxjs';
import { ActivateLoadingAction, FinishLoadingAction } from '../shared/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {

  form : FormGroup;
  type :string = 'ingreso';
  $loading : Observable<any>;
  constructor( private igService:IngresoEgresoService, public store : Store<AppState>) { }

  ngOnInit() {

    this.$loading = this.store.select('ui');
    this.form = new FormGroup({
      'description': new FormControl('',Validators.required),
      'amount': new FormControl(0,Validators.min(1))      
    })
  }

  onSubmit(){
    const action = new ActivateLoadingAction();
    this.store.dispatch(action);
    const data : ingresoegreso={
      ...this.form.value,
      type:this.type
    };
    this.igService.create(data).then(()=>{
      this.form.reset({
        amount:0
      });
      const action = new FinishLoadingAction();
      this.store.dispatch(action);
    });    
  }

}
