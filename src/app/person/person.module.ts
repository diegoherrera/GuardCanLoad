import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersoneditComponent } from './personedit/personedit.component';


@NgModule({
  declarations: [
    PersonComponent,
    PersonlistComponent,
    PersoneditComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule {
  constructor() {
    console.log('paso por PersonModule');
  }
 }
