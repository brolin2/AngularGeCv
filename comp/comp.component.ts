import { Component, OnInit, Input } from '@angular/core';
import { Comp } from '../comp';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';
import { CompService } from '../comp.service';
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  @Input() comp: Comp;

  constructor(
    private route : ActivatedRoute,
    private compService : CompService,
    private location : Location
  ) { }

  ngOnInit() {
    this.init();
    this.getComp();
  }
  idcv:string;
  idc:string;
  init() : void {
    const idd = this.route.snapshot.paramMap.get('id');
    const ids=this.route.snapshot.paramMap.get("idcv");
    this.idcv = ids;
    this.idc = idd;
  }
  getComp() : void {
    this.compService.getComp(this.idc , this.idcv).subscribe(comp => this.comp = comp);
  }
  save() : void {
    this.compService.updateComp(this.idc , this.comp).subscribe(() => this.goBack());
  }
  delete() : void {
    this.compService.deleteComp(this.idc , this.idcv).subscribe(() => this.goBack());
  }


  goBack() : void {
    this.location.back();
  }


}
