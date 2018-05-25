import { Component, OnInit, ViewChild } from '@angular/core';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import { ListCvComponent } from '../list-cv/list-cv.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {
  listCv : ListCvComponent;
  
  constructor( private cvService : CvService,  private location : Location ,private router: Router) { }
  cvss : Cv[];
  id= 3;
  add(nome: string , cognome : string , eta : number){
    nome= nome.trim();
    cognome=cognome.trim();
    var curr = { "nome": nome , "cognome": cognome , eta:eta };
    //this.cvService.create(curr as Cv)
    this.cvService.addCv(curr as Cv)
    .subscribe(cv => {this.listCv.cvs.push(cv) ;});
    this.router.navigateByUrl(`/curriculum`);    //REINDERIZZA IN UN ALTRO COMPONENTE
    
    
      
  }
  // @ViewChild('reupload' ) reupload;
  // this.reupload.getNativeElement().click();

  // redirect(): void{
  //   routerLink =
  // }

  ngOnInit() {
  }

}
