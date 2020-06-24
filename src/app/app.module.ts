import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } 
from './page-not-found/page-not-found.component';
import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { CargarmodulosGuard } from './cargarmodulo.guard';
import { ModuleNotFoundComponent } from './module-not-found/module-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent,
    ModuleNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [CargarmodulosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
