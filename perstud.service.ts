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

  getPerStud(idp:string, idcv: string  ) : Observable<PerStud>{
    return this.http.get<PerStud>('http://localhost:54424/api/CV/'+idcv+'/PerStud/'+ idp).pipe(
      tap(_=> this.log('Preso PerStud id = ' + idp)),
      catchError(this.handleError("ERRORE GET BY ID PER STUD"))
    );
  }
  getListPerStud(id:string) : Observable<PerStud[]>{
    return this.http.get<PerStud[]>('http://localhost:54424/api/CV/' +id + '/PerStud').pipe(
      tap(_=> this.log('Presa lista di perStud del cv : ' + id)),
      catchError(this.handleError("Errore GET LIST PER STUD"))
    );
  }

  updatePerStud(perstud: PerStud , idcv: string) : Observable<any> {
    var body = {
      Id : perstud.Id,
      AnnoInizio: perstud.AnnoInizio,
      AnnoFine: perstud.AnnoFine,
      Titolo: perstud.Titolo,
      Descrizione: perstud.Descrizione
    }
    return this.http.put<PerStud>('http://localhost:54424/api/CV/'+idcv+'/PerStud/Put/'+body.Id.toString(), body   ).pipe(
      tap(_=> this.log("Modificato PErcorso Studi")),
      catchError(this.handleError("ERRORE PERSTUD UPDATE"))
    );
  }
  deletePerStud(idp : string , idcv: string ): Observable<any>{
    return this.http.delete('http://localhost:54424/api/CV/'+idcv+'/PerStud/Del/'+idp).pipe(
      tap(_=> this.log("Cancellato Per Stud id : " +idp)),
      catchError(this.handleError('ERRORE DELETE PERSTUD'))
    );
  }

  addPerStud(perstud: PerStud , idcv:string ) : Observable<PerStud>{
    return this.http.post<PerStud>('http://localhost:54424/api/CV/'+idcv+'/PerStud/Add' , perstud).pipe(
      tap(_ => this.log("AGGIUTO PERCORSO STUDI al CV : " + idcv)),
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
