import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { InMemoryEspLavService} from './in-memory-esp-lav.service';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { CvSearchComponent } from './cv-search/cv-search.component';
import { CvAddComponent } from './cv-add/cv-add.component';
import { EspAddComponent } from './esp-add/esp-add.component';
import { ListEspComponent } from './list-esp/list-esp.component';
@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    ListCvComponent,
    MessagesComponent,
    CvSearchComponent,
    CvAddComponent,
    EspAddComponent,
    ListEspComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // nel "For root metto in memory esp lav " invece di in memory data service
    // HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService , {dataEncapsulation : false} ),
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService , {dataEncapsulation: false}),
	  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
