import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { EditcountryComponent } from './editcountry/editcountry.component';
import { DetailcountryComponent } from './detailcountry/detailcountry.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    EditcountryComponent,
    DetailcountryComponent,
    CountrylistComponent,
    AddcountryComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule {
  constructor() {
    console.log('paso por CountryModule');
  }
 }
