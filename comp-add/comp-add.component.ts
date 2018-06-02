import { Component, OnInit, Input } from '@angular/core';
import { Comp } from '../comp';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';
import { CompService } from '../comp.service';

@Component({
  selector: 'app-comp-add',
  templateUrl: './comp-add.component.html',
  styleUrls: ['./comp-add.component.css']
})
export class CompAddComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private compService : CompService,
    private location : Location
  ) { }

  ngOnInit() {
  }

  add(titolo:string , lvl : number ){
    var comp = {
      Id :1131,
      Titolo: titolo,
      Livello: lvl
    }
    const id=this.route.snapshot.paramMap.get('id');
    this.compService.addComp(comp,id).subscribe(()=> this.goBack());
  }

  goBack() : void {
    this.location.back();
  }
}
