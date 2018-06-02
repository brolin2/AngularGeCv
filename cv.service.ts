import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import {catchError , map , tap } from 'rxjs/operators';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Cv }  from './cv';
import { MessageService } from './message.service';
import { Esp } from './esp';
import { GenService } from './gen.service';
import { CvSerializer } from './cv-serializer';
import { getRandomString } from 'selenium-webdriver/safari';

//import { Response } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders ( { 'Content-Type' : 'application/json'  , 'Access-Control-Allow-Origin' : '*',
     'Access-Control-Allow-Credentials' : 'true' ,   'Access-Control-Allow-Headers' : 'Content-Type, Accept',
    'Access-Control-Allow-Methods' : 'POST, GET , PUT, PATCH , DELETE ,OPTIONS'
  })
};
@Injectable({
  providedIn: 'root'
  //providedIn: 'http://localhost:54424/'
})
//export class CvService extends GenService<Cv> {
export class CvService  {  
// private cvUrl= 'api';     // FA RIFERMIENTO AL FILE CONTENENTE I DATI!
  private cvUrl = 'api/CVS';
//   constructor(http: HttpClient ) {
//     super(
//       "api",
//       "CVS",
//       new CvSerializer()
//     );
//    }
    constructor (private http : HttpClient , private messageService : MessageService  ) {
      
    }
    getCurriculums(): Observable<Cv[]>{     // LISTA CURRICULUM
    return this.http.get<Cv[]>(this.cvUrl).pipe(
      tap(cvs => this.log(`CURRICULUM PRESI!`)),
      catchError(this.handleError('getCurriculums', []))
    );
  }
  
private _headers = new HttpHeaders().set('Content-Type' , 'application/json' );
   
  getTest() : Observable<Cv[]>{
   
    
    return this.http.get<Cv[]>('http://localhost:54424/api/CV' ).pipe(
      tap( cvs => this.log("Angular ha funzionato...")),
      catchError(this.handleError('il test é miseramente fallito' , []))
    )
  }
  // getTest(): Observable<Cv[]>{
  //   return this.http.jsonp<T[]>("http://localhost:54424/api/Angular" , "HttpGet").pipe(
  //     tap( cvs => this.log ("ANGULAR TEST HA FUNZIONATO!")),
  //     catchError(this.handleError('Il Test é fallito ' , []))
  //   );
  // }

  getCurriculum(id:string): Observable<Cv> {    //CURRICULUM BY ID
    const url= `${this.cvUrl}/${id}`;
    return this.http.get<Cv>(`http://localhost:54424/api/CV/` + id ).pipe(
      tap(_=> this.log(`Preso dal DB cv id= ${id}`)),
      catchError (this.handleError<Cv>(`getCurriculum id=${id}`))
    );
  }
  updateCv(cv:Cv) : Observable<any>{
    var body =  {
      Matricola: cv.Matricola,
      Nome: cv.Nome,
      Cognome: cv.Cognome,
      Eta: cv.Eta,
      Residenza: cv.Residenza,
      Email: cv.Email,
      Telefono: cv.Telefono
    }
    return this.http.post('http://localhost:54424/api/CV/ModCv' , body  ).pipe(

      tap(_=> this.log(`Aggiornamento Curriculum id= ${cv.id}`)),
      catchError(this.handleError<any>(`updateCv`))
    );
  }
  deleteCv (cv: Cv | string): Observable<Cv>{
    const id= typeof cv=== 'string'? cv: cv.Matricola;
    const url = `${this.cvUrl}/${id}`;
    return this.http.delete<Cv>('http://localhost:54424/api/CV/'+ id).pipe(
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
    return this.http.get<Cv[]>(`http://localhost:54424/api/CercaChiava/${term}`).pipe(
      tap(_=> this.log(`Trovati cv con nome = "${term}"`)),
      catchError(this.handleError<Cv[]> ('searchCv', []))
    );
  }
   searchCognome(cognome: string ): Observable<Cv[]> {
    if(!cognome.trim()){
      return of ([]);
    }
    return this.http.get<Cv[]>(`http://localhost:54424/api/CercaCognome/${cognome}`).pipe(
      tap(_=> this.log(`Trovati cv Con cognome : ${cognome}`)),
      catchError(this.handleError<Cv[]>('searchCognome' ,[]))
    );
  }

  addCv(cv : Cv) : Observable<Cv> {
    
    return this.http.post<Cv>('http://localhost:54424/api/CV/AddCv', cv ).pipe(
      tap((cv:Cv) => this.log(`aggiunto Curriculum con id : `)),
      catchError(this.handleError<Cv>('AddCv'))
    );
  }

  searchEta(eta: number) : Observable<Cv[]>{
    return this.http.get<Cv[]>('http://localhost:54424/api/CercaEta/'+eta.toString()).pipe(
      tap(_=> this.log("Curriculum trovati con eta "+eta.toString())),
      catchError(this.handleError('Errore search ETA ' , []))
    );
  }

  searchMinMax(etaMin: number, etaMax : number) : Observable<Cv[]>{
    return this.http.get<Cv[]>('http://localhost:54424/api/CercaMinMax/'+etaMin.toString()+ '/'+ etaMax.toString()).pipe(
      tap(_ => this.log("Curriculum trovati nel range "+etaMin.toString()+"-"+etaMax.toString() )),
      catchError(this.handleError("errore Search Range Eta" , []))
    );
  }

  private log(message:string){
		this.messageService.add('Servizio Curriculum : '+message);
	}
}
