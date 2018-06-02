import { Component, OnInit, Injectable } from '@angular/core';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import {CvSearchComponent} from '../cv-search/cv-search.component';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
  providers: [CvService]
})
// @Injectable({
//   providedIn: 'root'
//   //providedIn : CvService
// })
export class ListCvComponent implements OnInit {
    // TEST PER PROVARE A FARMI RIMANDARE SU QUESTA PAGINA
    // UNA VOLTA AVVENUTA LA RICERCA! TRASFORMO CVS IN Observable...
  //cvs : Observable<Cv[]>;
  cvs : Cv[];
  // cvService: CvService ;
  constructor(private cvService: CvService , private cvSearch : CvSearchComponent , private app : AppComponent) {}
  
  ngOnInit() {
    //this.cvs= this.cvSearch.cvss;
    //this.getCurriculums();
  }
  getCurriculums(): void{
    //this.cvService.list().subscribe(cvs => this.cvs = cvs);
    //this.cvService.getCurriculums().subscribe(cvs => this.cvs = cvs);
    this.cvService.getTest().subscribe(cvs => this.cvs = cvs);
  }
  
  deleteCv(cv:Cv) :void{
    this.cvs = this.cvs.filter(c=>c !=cv);
    this.cvService.deleteCv(cv).subscribe();
  }

  

  
}
