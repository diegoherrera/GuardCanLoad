import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersoneditComponent } from './personedit/personedit.component';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersonComponent } from './person/person.component';


const personRoutes: Routes = [
	{ 
	  path: '',
          component: PersonComponent,
	  children: [ 
	    {
		path: '',
		component: PersonlistComponent,
		children: [
		   {
		     path: ':id',
		     component: PersoneditComponent
		   }
		]			
	    }
	  ]
	}  
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
