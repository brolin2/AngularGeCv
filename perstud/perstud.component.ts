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
    this.init();
    this.getPerStud();
  }
  idcv:string;
  idp:string;
  init() : void {
    const idd = this.route.snapshot.paramMap.get('id');
    const ids=this.route.snapshot.paramMap.get("idcv");
    this.idcv = ids;
    this.idp = idd;
  }

  getPerStud() : void {
   
    this.perstudService.getPerStud(this.idp , this.idcv).subscribe(perstud => this.perstud= perstud);
  }
  deletePerStud() : void{
    
    this.perstudService.deletePerStud(this.idp, this.idcv).subscribe(() => this.goBack());

  }
  save(): void{
   
    this.perstudService.updatePerStud(this.perstud ,this.idcv ).subscribe( () =>this.goBack());

  }
  goBack() : void {
    this.location.back();
  }
}
