import { Component, OnInit, Input } from '@angular/core';
import { Esp } from '../esp';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { EspService } from '../esp.service';
import { isNumber } from 'util';
@Component({
  selector: 'app-esplav',
  templateUrl: './esplav.component.html',
  styleUrls: ['./esplav.component.css']
})
export class EsplavComponent implements OnInit {
  @Input() esp : Esp;

  btn_save = true;
  btn_back = true;
  btn_delete = true;
  bottone =false;

  constructor( private location : Location  , private route : ActivatedRoute , private espService: EspService) { }

  ngOnInit() {
    // const id=+this.route.snapshot.paramMap.get('id');
    // if(isNumber(id)){
    //   this.btn_back=true;
    //   this.btn_delete=true;
    //   this.btn_save=true;
    //   this.bottone=true;
    //   this.getEsp();
    // }else{
    //   this.btn_delete=false;
    //   this.bottone=true;
    //   this.btn_save=false; 
    //   this.btn_back=true;
    // }
    this.init();
    this.getEsp();
  }
  idcv:string;
  ide:string;
  init() : void {
    const idd = this.route.snapshot.paramMap.get('id');
    const ids=this.route.snapshot.paramMap.get("idcv");
    this.idcv = ids;
    this.ide = idd;
  }
  getEsp() : void{
    
    this.espService.getEsp(this.ide ,this.idcv ).subscribe(esp => this.esp = esp);
  }
  goBack() :void {
    this.location.back();
  }
  save() : void {
    this.espService.updateEsp(this.esp , this.idcv).subscribe(() => this.goBack()); // ()=>this.goBack());
  }
  delete() : void {
    const id=+this.route.snapshot.paramMap.get('id');
    this.espService.deleteEsp(this.ide , this.idcv).subscribe(() => this.goBack());
  }
  add(AI :number , AF : number , qualifica: string , descr : string){
    var esp = {
      AnnoInizio: AI , 
      AnnoFine : AF ,
      Qualifica: qualifica,
      Descrizione : descr,
      Id : 666
    }
    this.espService.addEsp(this.esp ,this.idcv ).subscribe(()=> this.goBack());
  }
}
