import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { HttpModule } from '@angular/http';
import { SigninComponent } from './signin/signin.component';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [{
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("2070774416285250")
      },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("50573442860-6lf1eme9lnsjra8vl8mil36qn2ecm959.apps.googleusercontent.com")
        },
      ]
  )
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'signin', component: SigninComponent}
    ])
  ],
  providers: [
  
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }