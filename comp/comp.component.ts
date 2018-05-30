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
    this.getComp();
  }
  getComp() : void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.compService.getComp(id).subscribe(comp => this.comp = comp);
  }
  save() : void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.compService.updateComp(id , this.comp).subscribe(() => this.goBack());
  }

  goBack() : void {
    this.location.back();
  }


}
