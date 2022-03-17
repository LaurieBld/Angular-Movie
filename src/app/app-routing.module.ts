import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { DetailsComponent } from './details/details.component';
import { NavGenresComponent } from './nav-genres/nav-genres.component';


// Route pour all movies component  et details//

const routes: Routes = [ 
  {
    path:'', component: AllMoviesComponent
  },
  {
    path:'details/:id', component: DetailsComponent
  },
  {
    path:':genre', component: NavGenresComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
