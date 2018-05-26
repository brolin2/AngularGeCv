import { Component, OnInit, Input } from '@angular/core';
import { PerStud } from '../perstud';
import { PerstudService} from '../perstud.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-perstud',
  templateUrl: './perstud.component.html',
  styleUrls: ['./perstud.component.css']
})

export class PerstudComponent implements OnInit {
  @Input() perstud: PerStud;
  constructor(
    private route: ActivatedRoute,
    private perstudService: PerstudService,
    private location : Location
  ) { }

  ngOnInit() {
    this.getPerStud();
  }

  getPerStud() : void {
    const id=+this.route.snapshot.paramMap.get('id');
    this.perstudService.getPerStud(id).subscribe(perstud => this.perstud= perstud);
  }
}
