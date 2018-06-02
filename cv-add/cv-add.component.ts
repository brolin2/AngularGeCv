import { Component, OnInit, ViewChild } from '@angular/core';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import { ListCvComponent } from '../list-cv/list-cv.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {
  listCv : ListCvComponent;
  
  cv : Cv;
  constructor( private cvService : CvService,  private location : Location ,private router: Router) { }
  message:string;
  add(nome: string , cognome : string , eta : number , telefono : string , email : string , residenza : string  ){
    nome= nome.trim();
    cognome=cognome.trim();
    telefono = telefono.trim();
    email=email.trim();
    residenza=residenza.trim();
    var mat= Math.random().toString(36).substr(2, 4);
    var curr = { Nome: nome ,
      Cognome: cognome , 
      Eta:eta ,
      Telefono: telefono,
      Email : email,
      Residenza: residenza,
      Matricola : mat
    
    };
    
     this.cvService.addCv(curr as Cv).subscribe(
       cv => this.cv = cv,
       (err) => this.message="Errore" ,
       ()=> this.router.navigateByUrl(`/detail/`+mat)
       
      ); //REINDERIZZA IN UN ALTRO COMPONENTE
      
    
    
      
  }
  // @ViewChild('reupload' ) reupload;
  // this.reupload.getNativeElement().click();

  // redirect(): void{
  //   routerLink =
  // }
  ngOnInit() {
  }

}
