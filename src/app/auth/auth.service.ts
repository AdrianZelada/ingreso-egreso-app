import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore' 
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { User } from './user.model';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ActivateLoadingAction, FinishLoadingAction } from '../shared/ui.actions';
import { SetAuthAction, UnsetAuthAction } from './auth.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubcription : Subscription = new Subscription();
  private user:User;

  constructor( 
      private afAuth : AngularFireAuth
    , private route:Router
    , private afDB:AngularFirestore
    , private store : Store<AppState>
  ) { }

  initAuthListener(){
    this.afAuth.authState.subscribe((fbUser)=>{
      console.log(fbUser);
      if(fbUser){
        this.userSubcription=this.afDB.doc(`${fbUser.uid}/user`).valueChanges().subscribe((userObj:any)=>{              
          const newUser = new User(userObj);
          const action = new SetAuthAction(newUser);
          this.user = newUser;
          this.store.dispatch(action);          
        });
      }else{
        this.user = null;
        this.userSubcription.unsubscribe();
      }
    });
  }

  isAuth(){
    return this.afAuth
          .authState
          .pipe(
            map((fbUser)=>{
              const status = fbUser !== null;
              if(!status){
                this.route.navigate(['/login']);      
              }
              return status;
            })
          )
  }

  createdUser(nombre:string,email:string,password:string){
    const action = new ActivateLoadingAction();
    this.store.dispatch(action);
    this.afAuth.auth
      .createUserWithEmailAndPassword(email,password)
      .then((resp)=>{
        console.log(resp);
        const user : User={
          email:email,
          uid:resp.user.uid,
          nombre:nombre
        };

        this.afDB.doc(`${user.uid}/user`)
          .set(user)
          .then(()=>{
            this.route.navigate(['/']);
            const action = new FinishLoadingAction();
            this.store.dispatch(action);
          });        
      })
      .catch((error)=>{
        const action = new FinishLoadingAction();
        this.store.dispatch(action);
        Swal('Error in the Created User',error.message,'error');        
      })
  }

  login(email:string,password:string){
    const action = new ActivateLoadingAction();
    this.store.dispatch(action);
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then((resp)=>{
      console.log(resp);      
      this.route.navigate(['/']);      
      const action = new FinishLoadingAction();
      this.store.dispatch(action)
    })
    .catch((error)=>{
      const action = new FinishLoadingAction();
      this.store.dispatch(action)
      Swal('Error in the Login',error.message,'error');          
    })
  }

  logout(){
    const action = new UnsetAuthAction();
    this.store.dispatch(action);
    this.route.navigate(['/login']);      
    this.afAuth.auth.signOut();
  }

  getUser(){
    return { ...this.user};
  }
    
}
