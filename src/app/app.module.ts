import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LeftViewComponent } from './components/left-view/left-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashComponent } from './pages/dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftViewComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
