import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ingresoegreso } from './ingresoEgreso.model';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';
import { AppState } from './ingreso-egreso.reducer';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { SetItemsAction, UnsetItemsAction } from './ingreso-egreso.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  initSubcription : Subscription = new Subscription();
  itemsSubcription : Subscription = new Subscription();
  constructor(private afDB:AngularFirestore,private authService:AuthService,private store:Store<AppState>) { }

  initIngresoEgreso(){
    this.initSubcription=this.store.select('auth').pipe(
      filter(auth=> auth.user !== null)
    ).subscribe((auth)=>{
      this.getItems(auth.user.uid);
    });
  }

  unSubcription(){
    this.initSubcription.unsubscribe();
    this.itemsSubcription.unsubscribe();
    const action = new UnsetItemsAction();
    this.store.dispatch(action);
  }

  create(ingresoEgreso : ingresoegreso):Promise<any>{
    const user = this.authService.getUser();        
    return this.afDB.doc(`${user.uid}/ingresos-egresos`)
            .collection('items')
            .add(ingresoEgreso)
            .then((data)=>{    
              Swal('Created',`${ingresoEgreso.type} Creado`,'success');                  
              return Promise.resolve(data);        
            })
            .catch((e)=>{
              Swal('Error',`Error al Creado`,'error');                  
              return Promise.reject(e);                      
            });            
  }

  delete(ingresoEgreso:ingresoegreso){
    const user = this.authService.getUser();
    return this.afDB
      .doc(`${user.uid}/ingresos-egresos/items/${ingresoEgreso.uid}`)
      .delete()
      .then((data)=>{
        Swal('Deleted',`${ingresoEgreso.description} Borrado`,'success');                  
        return Promise.resolve(data);        
      })
      .catch((e)=>{
        Swal('Error',`Error al Borrado`,'error');                  
        return Promise.reject(e);         
      })
  }

  private getItems(uid :string){
    this.itemsSubcription=this.afDB.collection(`${uid}/ingresos-egresos/items`)
      .snapshotChanges()
      .pipe(
        map(data=>{
          return data.map((doc)=>{
            return {
              uid:doc.payload.doc.id,
              ...doc.payload.doc.data()             
            }
          });
        })
      )
      .subscribe((collection:any)=>{        
        const action = new SetItemsAction(collection);
        this.store.dispatch(action);       
      });
  }
}
