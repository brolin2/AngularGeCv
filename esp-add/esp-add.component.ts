import { Component, OnInit } from '@angular/core';
import {EspService } from '../esp.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-esp-add',
  templateUrl: './esp-add.component.html',
  styleUrls: ['./esp-add.component.css']
})
export class EspAddComponent implements OnInit {

  constructor(private espService : EspService , private route : ActivatedRoute ) { }

  ngOnInit() {
  }
  addEsp(qualifica : string , descrizione : string , AI : number , AF:number ): void {
    var esp = {
      Id : 99,
      AnnoInizio: AI,
      AnnoFine : AF,
      Qualifica: qualifica,
      Descrizione : descrizione
    }
    const id=this.route.snapshot.paramMap.get('id');
    this.espService.addEsp(esp , id).subscribe();
  }
}
