import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { catchError  , map , tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Esp } from './esp'; 
// import { ESPLAVS } from './in-memory-esp-lav.service';

const httpOptions = {
	headers: new HttpHeaders ( { 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EspService {
  
  getEsp(id:string , idcv :string ): Observable<Esp> {
   return this.http.get<Esp>(`http://localhost:54424/api/CV/`+idcv+`/EspLav/`+id).pipe(
     tap(_=> this.log(`Presa Esp Lav id=` + id.toString())),
     catchError(this.handleError<Esp>(`GetEspLAv` , ))
   );
  }

  // getEspLavs(): Observable<Esp[]>{
  //   return of(ESPLAVS);
  // }
  //private espUrl = 'api/ESPLAVS'; // Fa RIFERIMENTO AL FILE CONTENENTE I DATI!

  constructor( private messageService : MessageService , private http : HttpClient) {}
  getEspLavs(id: string) : Observable<Esp[]>{
    return this.http.get<Esp[]>('http://localhost:54424/api/CV/' + id + '/EspLav').pipe(
      tap(esp => this.log(`Prese Esperienze Lavorative on idcv =`+ id)),
      catchError(this.handleError(`getEspLavS` , []))
    );
  }

  deleteEsp(id:string , idcv: string) : Observable<any>{
    return this.http.delete<Esp>('http://localhost:54424/api/CV/'+idcv+'/EspLav/Del/' + id.toString()).pipe(
      tap(_ => this.log('Eliminata Esp Lav Con id = ' + id.toString())),
      catchError(this.handleError('Errore nel delete ESPLAV'))
    );
  }
 
  addEsp(esp:Esp  , id:string) : Observable<Esp>{
    return this.http.post<Esp>('http://localhost:54424/api/CV/'+id+'/Add/EspLav', esp ).pipe(
      tap(_=> this.log("Aggiutna ESP LAV al CV : " +id)),
      catchError(this.handleError("ERRORE ADD ESPLAV"))
    );
  }


  updateEsp(esp: Esp , idcv: string) :  Observable<any>{
    var body = {
      Id: esp.Id,
      AnnoInizio: esp.AnnoInizio,
      AnnoFine: esp.AnnoFine,
      Qualifica: esp.Qualifica,
      Descrizione: esp.Descrizione
    }
    return this.http.post('http://localhost:54424/api/CV/'+idcv+'/Esplav/Put/'+esp.Id.toString() , body ).pipe(
      tap(_ => this.log("Aggiornata esp lav ")),
      catchError(this.handleError<Esp>('Modifica esplAv'))
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
