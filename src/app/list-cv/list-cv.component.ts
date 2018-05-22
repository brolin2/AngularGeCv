import { Component, OnInit, Injectable } from '@angular/core';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import {CvSearchComponent} from '../cv-search/cv-search.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ListCvComponent implements OnInit {
    // TEST PER PROVARE A FARMI RIMANDARE SU QUESTA PAGINA
    // UNA VOLTA AVVENUTA LA RICERCA! TRASFORMO CVS IN Observable...
  //cvs : Observable<Cv[]>;
  cvs : Cv[];

  constructor(private cvService: CvService ) { }

  ngOnInit() {
    //this.cvs= this.cvSearch.cvs$;
    this.getCurriculums();
  }
  
  deleteCv(cv:Cv) :void{
    this.cvs = this.cvs.filter(c=>c !=cv);
    this.cvService.deleteCv(cv).subscribe();
  }

  

  getCurriculums(): void{
    this.cvService.getCurriculums().subscribe(cvs => this.cvs = cvs);
  }
  
}
