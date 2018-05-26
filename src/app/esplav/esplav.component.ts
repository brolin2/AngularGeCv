import { Component, OnInit, Input } from '@angular/core';
import { Esp } from '../esp';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { EspService } from '../esp.service';
@Component({
  selector: 'app-esplav',
  templateUrl: './esplav.component.html',
  styleUrls: ['./esplav.component.css']
})
export class EsplavComponent implements OnInit {
  @Input() esp : Esp;

  

  constructor( private location : Location  , private route : ActivatedRoute , private espService: EspService) { }

  ngOnInit() {
    this.getEsp();
  }
  getEsp() : void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.espService.getEsp(id).subscribe(esp => this.esp = esp);
  }
}
