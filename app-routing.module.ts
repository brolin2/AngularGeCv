import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { CurriculumComponent } from './curriculum/curriculum.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { CvSearchComponent } from './cv-search/cv-search.component';
import { CvAddComponent } from './cv-add/cv-add.component';
import { ListEspComponent } from './list-esp/list-esp.component';
import { EsplavComponent } from './esplav/esplav.component';
import { PerstudComponent } from './perstud/perstud.component';
import { ListPerstudComponent } from './list-perstud/list-perstud.component';
import { CompComponent } from './comp/comp.component';
import { EspAddComponent} from './esp-add/esp-add.component';
import { PerstudAddComponent } from './perstud-add/perstud-add.component';
import { CompAddComponent } from './comp-add/comp-add.component';
const routes: Routes= [
  {path:'detail/:id', component:CurriculumComponent },
  {path: 'curriculum' , component: ListCvComponent},
  {path: 'search' , component: CvSearchComponent},
  {path: 'add' , component : CvAddComponent},
  {path: 'lista' , component: ListEspComponent },
  {path: 'detail/:idcv/esplav/:id' , component : EsplavComponent},
  {path: 'detail/:id/esp-add' , component : EspAddComponent},
  {path: 'detail/:idcv/perstud/:id' , component : PerstudComponent},
  {path: 'list-per' , component: ListPerstudComponent },
  {path: 'detail/:idcv/comp/:id' , component: CompComponent},
  {path: 'detail/:id/perstud-add' , component: PerstudAddComponent},
  {path: 'detail/:id/comp-add' , component: CompAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  // declarations: []
  exports : [RouterModule]
})
export class AppRoutingModule { }
