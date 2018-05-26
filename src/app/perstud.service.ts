import { Injectable } from '@angular/core';
import { PerStud } from './perstud';
import { Observable , of } from 'rxjs';
import { PERSTUDS } from './mock-perstud';
@Injectable({
  providedIn: 'root'
})
export class PerstudService {

  constructor() { }

  getPerStud(id:number ) : Observable<PerStud>{
    return of(PERSTUDS.find(ps => id===ps.id));
  }
  getListPerStud() : Observable<PerStud[]>{
    return of (PERSTUDS);
  }
}
