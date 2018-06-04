import { Component, OnInit, Input } from '@angular/core';
import {Cv } from '../cv';
import {ActivatedRoute } from '@angular/router';
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
    private location : Location,
  ) { }
  name : string;
  ngOnInit() {
    this.getCurriculum();
  }

  getCurriculum():void{
    const id=this.route.snapshot.paramMap.get('id');
    //this.cvService.read(3).subscribe(cv=>this.cv = cv);
    this.cvService.getCurriculum(id).subscribe(
      cv => this.cv= cv,
      (err) => this.name="ERRORE",
      () => this.name= this.cv.Nome
    );
  }
  save():void{
    this.cvService.updateCv(this.cv).subscribe();
  }

  delete(): void{
    const mat = this.cv.Matricola;
    this.cvService.deleteCv(mat).subscribe(
      () => this.name = "Curriculum cancellato",
      (err) => this.name="Errore",
      () => this.goBack()
    )
  }

  goBack(): void{
    this.location.back();
  }

}
