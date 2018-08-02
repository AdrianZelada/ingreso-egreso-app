import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { StoreModule} from '@ngrx/store'; 
import { StoreDevtoolsModule} from '@ngrx/store-devtools'; 
import { AppReducers} from './app.reducers';

import { AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AuthModule,      
    AppRoutingModule,        
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,    
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, 
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
