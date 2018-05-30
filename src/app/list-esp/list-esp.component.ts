import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { EspService } from '../esp.service';
import { Esp } from '../esp';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-list-esp',
  templateUrl: './list-esp.component.html',
  styleUrls: ['./list-esp.component.css'],
  providers:[EspService]
})
export class ListEspComponent implements OnInit {
  esp : Esp[];
  constructor( private espService : EspService , private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.getEspLavs();
  }
  getEspLavs() : void {
    const id=this.route.snapshot.paramMap.get('id');
    this.espService.getEspLavs(id).subscribe(esp => this.esp = esp);
  }

}
