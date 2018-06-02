import { Component, OnInit } from '@angular/core';
import { Observable , Subject } from 'rxjs';
import { debounceTime , distinctUntilChanged , switchMap, toArray } from 'rxjs/operators';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ListCvComponent} from '../list-cv/list-cv.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent} from '../app.component';
import { isNull } from 'util';
import { async } from 'q';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cv-search',
  templateUrl: './cv-search.component.html',
  styleUrls: ['./cv-search.component.css']
})


export class CvSearchComponent implements OnInit {

  cvs$ : Observable<Cv[]>;
  private searchTerms = new Subject<string>();
  cvss : Cv[];
    message:string;
  constructor( private cvService: CvService , private router : Router , private app : AppComponent , private location : Location )  { }
  searchCognome(term:string): void{
    term.trim();
    this.cvService.searchCognome(term).subscribe(cvss => this.app.cvsa = cvss);
    this.router.navigateByUrl('/curriculum');
  }
  searchAll(cognome: string , eta : number , etaMax : number , etaMin:number) : void{
    if(cognome!="" ){
      this.cvService.searchCognome(cognome).subscribe(
        cvss=> this.cvss=cvss ,
        (err) => this.message="Errore" ,
        () => this.check()
      );
    }else if(eta>0){
      this.cvService.searchEta(eta).subscribe(
        cvss=> this.cvss=cvss ,
        (err) => this.message="Errore" ,
        () => this.check()
      );
    }else if(etaMax>0 && etaMin>0){
      if(etaMax>etaMin){
        this.cvService.searchMinMax(etaMin,etaMax).subscribe(
          cvss=> this.cvss=cvss ,
          (err) => this.message="Errore" ,
          () => this.check()
        );
      }
    }else{
      this.message = "ERRORE PARAMETRI ERRATI";
    }
  }
   check() :void {
    if(this.cvss.length>0 ){
      this.app.cvsa= this.cvss;
      this.router.navigateByUrl('/curriculum');
    }else{
      this.message= "Non Ci Sono Curriculum che rispettano i parametri";
    }
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


  // function teser(nome:string) : void {
  //   if(this.cvss.length>0 ){
  //     this.app.cvsa= this.cvss;
  //     async(this.router.navigateByUrl('/curriculum'));
  //   }else{
  //     this.message= "Non Ci Sono Curriculum che rispettano i parametri";
  //   }
  // }

}
