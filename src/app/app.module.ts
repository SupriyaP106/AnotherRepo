
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BankingregComponent } from './bankingreg/bankingreg.component';

var myRoutes:Routes=[
  {​​​​​path:'',pathMatch:'full',redirectTo:'home'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgot",component:ForgotPasswordComponent},
  {path:"custreg",component:BankingregComponent},
  
]
//console.log(myRoutes);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ConfirmEqualValidatorDirective,
    ForgotPasswordComponent,
    BankingregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
