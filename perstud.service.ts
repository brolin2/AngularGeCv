import { Injectable } from '@angular/core';
import { PerStud } from './perstud';
import { Observable , of} from 'rxjs';
import { catchError  , map , tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { PERSTUDS } from './mock-perstud';
@Injectable({
  providedIn: 'root'
})
export class PerstudService {

  constructor(private http :HttpClient , private messageService : MessageService) { }

  getPerStud(id:number ) : Observable<PerStud>{
    return this.http.get<PerStud>('http://localhost:54424/api/PerStud/'+ id.toString()).pipe(
      tap(_=> this.log('Preso PerStud id = ' + id.toString())),
      catchError(this.handleError("ERRORE GET BY ID PER STUD"))
    );
  }
  getListPerStud(id:string) : Observable<PerStud[]>{
    return this.http.get<PerStud[]>('http://localhost:54424/api/CV/' +id + '/PerStud').pipe(
      tap(_=> this.log('Presa lista di perStud del cv : ' + id)),
      catchError(this.handleError("Errore GET LIST PER STUD"))
    );
  }

  updatePerStud(perstud: PerStud , id: string) : Observable<any> {
    var body = {
      Id : perstud.Id,
      AnnoInizio: perstud.AnnoInizio,
      AnnoFine: perstud.AnnoFine,
      Titolo: perstud.Titolo,
      Descrizione: perstud.Descrizione
    }
    return this.http.put<PerStud>('http://localhost:54424/api/PerStud/Put/'+id, body   ).pipe(
      tap(_=> this.log("Modificato PErcorso Studi")),
      catchError(this.handleError("ERRORE PERSTUD UPDATE"))
    );
  }
  deletePerStud(id : number): Observable<any>{
    return this.http.delete('http://localhost:54424/api/PerStud/Del/'+id.toString()).pipe(
      tap(_=> this.log("Cancellato Per Stud id : " +id.toString())),
      catchError(this.handleError('ERRORE DELETE PERSTUD'))
    );
  }

  addPerStud(perstud: PerStud , id:string ) : Observable<PerStud>{
    return this.http.post<PerStud>('http://localhost:54424/api/CV/'+id+'/Add/PerStud' , perstud).pipe(
      tap(_ => this.log("AGGIUTO PERCORSO STUDI al CV : " + id)),
      catchError(this.handleError("Errore ADD PErStudi "))
    );
  } 
  
  log(message:string){
		this.messageService.add('Servizio EspLav : '+message);
  }
  private handleError<T> (operation = 'operation' , result?:T){
		return (error:any):Observable<T> => {
			console.error(error);
			this.log(`${operation} failed : ${error.message}`);
			return of(result as T);
		}
  }
}
