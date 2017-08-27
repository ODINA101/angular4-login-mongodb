import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {RouterModule,RouterLinkActive} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import {MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MdSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdSnackBarModule,
    MdCheckboxModule,
    MdCardModule,
    MdTabsModule,
    MdToolbarModule,
    MdInputModule,
    RouterModule.forRoot(
      [
        {path:'',component:LoginComponent},
        {path:'reg',component:RegComponent},
        {path:'home',component:HomeComponent}
      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
