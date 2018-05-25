import { Component, OnInit } from '@angular/core';
import { Observable , Subject } from 'rxjs';
import { debounceTime , distinctUntilChanged , switchMap, toArray } from 'rxjs/operators';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ListCvComponent} from '../list-cv/list-cv.component';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-cv-search',
  templateUrl: './cv-search.component.html',
  styleUrls: ['./cv-search.component.css']
})
export class CvSearchComponent implements OnInit {

  cvs$ : Observable<Cv[]>;
  private searchTerms = new Subject<string>();
  // cvss = Cv[];
  
  constructor( private cvService: CvService , private router : Router )  { }
  searchCognome(term:string): void{
    // this.searchTerms.next(term);
    // this.cvs$= this.cvService.searchCognome(term);
    //this.listCv.cvs= this.cvs$;
    //this.router.navigateByUrl('/curriculum');
    //this.location.go('/curriculum', '' , cvs =   )
    // this.listCv.cvs.includes.arguments.Observable<Cv[]> = this.cvService.searchCognome(term).pipe(
    //   this.cvs$.map()
    // );
  }
  search(term:string) : void {
    this.searchTerms.next(term);
  }
  ngOnInit() : void {
    this.cvs$ = this.searchTerms.pipe(
      debounceTime(300),      // delay di 0.3 s per la ricerca
      distinctUntilChanged() ,  //Differenziali finchè cambiano
      switchMap((term:string) => this.cvService.searchCv(term)),
      
    );
    //this.cvs$= this.cvService.searchCv(this.searchTerms);
  }

}
