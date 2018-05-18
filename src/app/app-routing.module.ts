import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import {CurriculumComponent} from './curriculum/curriculum.component';
import { ListCvComponent} from './list-cv/list-cv.component';
import { CvSearchComponent } from './cv-search/cv-search.component'
const routes: Routes= [
  {path:'detail/:id', component:CurriculumComponent },
  {path: 'curriculum' , component: ListCvComponent},
  {path: 'search' , component: CvSearchComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]

  
})
export class AppRoutingModule { }
