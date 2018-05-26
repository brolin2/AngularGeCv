import { Component, OnInit } from '@angular/core';
import { PerstudService } from '../perstud.service';
import { PerStud } from '../perstud';
@Component({
  selector: 'app-list-perstud',
  templateUrl: './list-perstud.component.html',
  styleUrls: ['./list-perstud.component.css']
})
export class ListPerstudComponent implements OnInit {

  pss : PerStud[];

  constructor(private perstudService : PerstudService) { }
  ngOnInit() {
    this.getListPerstud();
  }
  getListPerstud(): void {
    this.perstudService.getListPerStud().subscribe(pss => this.pss= pss);
  }
}
