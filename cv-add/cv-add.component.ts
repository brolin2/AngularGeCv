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
  
  add(nome: string , cognome : string , eta : number , telefono : string , email : string , residenza : string  ){
    nome= nome.trim();
    cognome=cognome.trim();
    telefono = telefono.trim();
    email=email.trim();
    var matri = "KEl";
    residenza=residenza.trim();
    var curr = { "Nome": nome ,
      "Cognome": cognome , 
      Eta:eta ,
      Telefono: telefono,
      Email : email,
      Residenza: residenza,
      Matricola : matri
    
    };
    
     this.cvService.addCv(curr as Cv).subscribe();
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
