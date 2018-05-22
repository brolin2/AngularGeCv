import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { EspService } from '../esp.service';
import { Esp } from '../esp';
@Component({
  selector: 'app-list-esp',
  templateUrl: './list-esp.component.html',
  styleUrls: ['./list-esp.component.css']
})
export class ListEspComponent implements OnInit {
  esp : Esp[];
  constructor( private espService : EspService ) { }

  ngOnInit() {
    
    this.getEspLavs();
  }
  getEspLavs() : void {
    this.espService.getEspLavs().subscribe(esp => this.esp = esp);
  }

}
