import { Component, OnInit, Input } from '@angular/core';
import {Cv } from '../cv';
import {ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';
import {CvService } from '../cv.service';
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
  providers: [CvService]
})

// QUI VANNO I METODI PER CURRICULUM
export class CurriculumComponent implements OnInit {
  @Input() cv : Cv;
  constructor(
    private route: ActivatedRoute,
    private cvService : CvService,
    private location : Location
  ) { }

  ngOnInit() {
    this.getCurriculum();
  }

  getCurriculum():void{
    const id=this.route.snapshot.paramMap.get('id');
    //this.cvService.read(3).subscribe(cv=>this.cv = cv);
    this.cvService.getCurriculum(id).subscribe(cv => this.cv= cv)
  }
  save():void{
    this.cvService.updateCv(this.cv).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }

}
