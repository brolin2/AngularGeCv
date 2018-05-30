import { Component, OnInit } from '@angular/core';
import { Comp } from '../comp';
import { CompService } from '../comp.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {
  comps : Comp[];
  constructor(private compService: CompService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getComps();
  }
  getComps(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.compService.getListComp(id).subscribe(comps => this.comps = comps);
  }
}
