import { Component, OnInit } from '@angular/core';
import { PerstudService } from '../perstud.service';
import { PerStud } from '../perstud';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-list-perstud',
  templateUrl: './list-perstud.component.html',
  styleUrls: ['./list-perstud.component.css']
})
export class ListPerstudComponent implements OnInit {

  pss : PerStud[];

  constructor(private perstudService : PerstudService , private route: ActivatedRoute) { }
  ngOnInit() {
    this.getListPerstud();
  }
  getListPerstud(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.perstudService.getListPerStud(id).subscribe(pss => this.pss= pss);
  }
}
