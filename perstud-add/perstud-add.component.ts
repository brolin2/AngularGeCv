import { Component, OnInit, Input } from '@angular/core';
import { PerStud } from '../perstud';
import { PerstudService} from '../perstud.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perstud-add',
  templateUrl: './perstud-add.component.html',
  styleUrls: ['./perstud-add.component.css']
})
export class PerstudAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private perstudService: PerstudService,
    private location : Location
  ) { }

  ngOnInit() {
  }
  add(AI : number , AF : number , titolo : string , desc : string){
    var perstud = {
      Id : 13 , 
      AnnoInizio: AI,
      AnnoFine: AF,
      Titolo: titolo,
      Descrizione : desc
    }
    const id=this.route.snapshot.paramMap.get('id');
    this.perstudService.addPerStud(perstud , id).subscribe(()=> this.location.back());
  }
  goBack() : void {
    this.location.back();
  }

}
