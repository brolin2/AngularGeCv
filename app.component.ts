import { Component, Injectable } from '@angular/core';
import { Cv } from './cv';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'app';
  cvsa : Cv[];
  tester ( curriculums : Observable<Cv[]>) : void {
    curriculums.subscribe();
  }
}
