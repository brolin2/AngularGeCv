import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { CurriculumComponent } from './curriculum/curriculum.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import {CvSearchComponent } from './cv-search/cv-search.component';
import { CvAddComponent } from './cv-add/cv-add.component';
import { ListEspComponent } from './list-esp/list-esp.component';
import { EsplavComponent } from './esplav/esplav.component';
import {PerstudComponent } from './perstud/perstud.component';
import { ListPerstudComponent } from './list-perstud/list-perstud.component';
import { CompComponent } from './comp/comp.component';
const routes: Routes= [
  {path:'detail/:id', component:CurriculumComponent },
  {path: 'curriculum' , component: ListCvComponent},
  {path: 'search' , component: CvSearchComponent},
  {path: 'add' , component : CvAddComponent},
  {path: 'lista' , component: ListEspComponent },
  {path: 'esplav/:id' , component : EsplavComponent},
  {path: 'perstud/:id' , component : PerstudComponent},
  {path: 'list-per' , component: ListPerstudComponent },
  {path: 'comp/:id' , component: CompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  // declarations: []
  exports : [RouterModule]
})
export class AppRoutingModule { }
