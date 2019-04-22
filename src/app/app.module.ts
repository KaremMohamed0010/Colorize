import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GradientComponent } from './components/gradient/gradient.component';
import { BoxshadowComponent } from './components/boxshadow/boxshadow.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GradientComponent,
    BoxshadowComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
