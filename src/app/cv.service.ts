import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import {catchError , map , tap } from 'rxjs/operators';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Cv }  from './cv';
import { MessageService } from './message.service';
import { Esp } from './esp';
const httpOptions = {
	headers: new HttpHeaders ( { 'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvUrl= 'api/CVS';     // FA RIFERMIENTO AL FILE CONTENENTE I DATI!
  
  constructor( private http: HttpClient , private messageService: MessageService) { }
  
  
  getCurriculums(): Observable<Cv[]>{     // LISTA CURRICULUM
    return this.http.get<Cv[]>(this.cvUrl).pipe(
      tap(cvs => this.log(`CURRICULUM PRESI!`)),
      catchError(this.handleError('getCurriculums', []))
    );
  }

  getCurriculum(id:number): Observable<Cv> {    //CURRICULUM BY ID
    const url= `${this.cvUrl}/${id}`;
    return this.http.get<Cv>(url).pipe(
      tap(_=> this.log(`Preso dal DB cv id= ${id}`)),
      catchError (this.handleError<Cv>(`getCurriculum id=${id}`))
    );
  }
  updateCv(cv:Cv) : Observable<any>{
    return this.http.put(this.cvUrl , cv , httpOptions).pipe(
      tap(_=> this.log(`Aggiornamento Curriculum id= ${cv.id}`)),
      catchError(this.handleError<any>(`updateCv`))
    );
  }
  deleteCv (cv: Cv | number): Observable<Cv>{
    const id= typeof cv=== 'number'? cv: cv.id;
    const url = `${this.cvUrl}/${id}`;
    return this.http.delete<Cv>(url, httpOptions).pipe(
      tap(_=> this.log(`CANCELLATO curriculum id= ${id}`)),
      catchError(this.handleError<Cv>('deleteHero'))
    );
  }
  private handleError<T> (operation = 'operation' , result?:T){
		return (error:any):Observable<T> => {
			console.error(error);
			this.log(`${operation} failed : ${error.message}`);
			return of(result as T);
		}
  }
  searchCv(term:string): Observable<Cv[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Cv[]>(`${this.cvUrl}/?contains${term}`).pipe(
      tap(_=> this.log(`Trovati cv con nome = "${term}"`)),
      catchError(this.handleError<Cv[]> ('searchCv', []))
    );
  }
  searchCognome(cognome: string ): Observable<Cv[]> {
    if(!cognome.trim()){
      return of ([]);
    }
    return this.http.get<Cv[]>(`${this.cvUrl}?cognome=${cognome}`).pipe(
      tap(_=> this.log(`Trovati cv Con cognome : ${cognome}`)),
      catchError(this.handleError<Cv[]>('searchCognome' ,[]))
    );
  }

  addCv(cv : Cv) : Observable<Cv> {
    return this.http.post<Cv>(this.cvUrl , cv , httpOptions).pipe(
      tap((cv:Cv) => this.log(`aggiunto Curriculum con id : ${cv.id}`)),
      catchError(this.handleError<Cv>('AddCv'))
    );
  }

  

  private log(message:string){
		this.messageService.add('Servizio Curriculum : '+message);
	}
}
