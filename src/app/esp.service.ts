import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { catchError  , map , tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Esp } from './esp'; 
import { ESPLAVS } from './in-memory-esp-lav.service';

const httpOptions = {
	headers: new HttpHeaders ( { 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EspService {
  
  getEsp(id:number ): Observable<Esp> {
   return of (ESPLAVS.find(esp => esp.id === id));
  }

  getEspLavs(): Observable<Esp[]>{
    return of(ESPLAVS);
  }
  // private espUrl = 'api/ESPLAVS'; // Fa RIFERIMENTO AL FILE CONTENENTE I DATI!

  // constructor( private messageService : MessageService , private http : HttpClient) {}
  // getEspLavs() : Observable<Esp[]>{
  //   return this.http.get<Esp[]>(this.espUrl).pipe(
  //     tap(esp => this.log(`Prese Esperienze Lavorative`)),
  //     catchError(this.handleError(`getEspLavS` , []))
  //   );
  // }


  // log(message:string){
	// 	this.messageService.add('Servizio Curriculum : '+message);
  // }
  // private handleError<T> (operation = 'operation' , result?:T){
	// 	return (error:any):Observable<T> => {
	// 		console.error(error);
	// 		this.log(`${operation} failed : ${error.message}`);
	// 		return of(result as T);
	// 	}
  // }

}
