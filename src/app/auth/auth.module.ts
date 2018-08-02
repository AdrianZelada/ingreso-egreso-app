import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AngularFireAuthModule,
        RouterModule
    ]    
})
export class AuthModule { }