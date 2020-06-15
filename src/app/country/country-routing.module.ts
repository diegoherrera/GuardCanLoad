import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { DetailcountryComponent } from './detailcountry/detailcountry.component';
import { EditcountryComponent } from './editcountry/editcountry.component';


const countryRoutes: Routes = [
	{ 
	  path: '',
          component: CountryComponent,
          children: [ 
	    {
		   path: 'add',
		   component: AddcountryComponent
	    },
	    {
	           path: 'list',
		   component: CountrylistComponent,
		   children: [
		       {
			   path: 'view/:country-id',
		           component: DetailcountryComponent
		       },
		       {
			   path: 'edit/:country-id',
		           component: EditcountryComponent
		       },			   
		   ]
	    }	
	  ]
	}  
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
