import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { CurriculumComponent } from './curriculum/curriculum.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import {CvSearchComponent } from './cv-search/cv-search.component';
import { CvAddComponent } from './cv-add/cv-add.component';
import { ListEspComponent } from './list-esp/list-esp.component';

const routes: Routes= [
  {path:'detail/:id', component:CurriculumComponent },
  {path: 'curriculum' , component: ListCvComponent},
  {path: 'search' , component: CvSearchComponent},
  {path: 'add' , component : CvAddComponent},
  {path: 'lista' , component: ListEspComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  // declarations: []
  exports : [RouterModule]
})
export class AppRoutingModule { }
