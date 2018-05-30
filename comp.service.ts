import { Injectable } from '@angular/core';
import { Comp } from './comp';
import { Observable , of} from 'rxjs';
import { catchError  , map , tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompService {

  constructor(  private messageService : MessageService , private http : HttpClient) { }

  getComp(id:number) : Observable<Comp>{
    return this.http.get<Comp>('http://localhost:54424/api/Competenza/'+ id.toString()).pipe(
      tap(_=> this.log("Presa Competenza id : " +id.toString())),
      catchError(this.handleError("ERRORE GET COMPETENZA"))
    );
  }
  getListComp(id: string ) : Observable<Comp[]>{
    return this.http.get<Comp[]>('http://localhost:54424/api/CV/'+id+'/Competenza').pipe(
      tap(_=> this.log("Presa ListaComp  CV : " +id)),
      catchError(this.handleError("ERRORE GET LIST "))
    );
  }
  updateComp(id:number , comp :  Comp) : Observable<any>{
    return this.http.put<Comp>('http://localhost:54424/api/Competenza/Put/'+id , comp).pipe(
      tap(_ => this.log("UPDATE COMP ID = " + id.toString())),
      catchError(this.handleError("ERRORE UPDATE"))
    );
  }
  deleteComp(id:number): Observable<any> {
    return this.http.delete<Comp>('http://localhost:54424/api/Competenza/Del/'+ id ).pipe(
      tap(_=> this.log("ELIMINATA COMP ID: " +id.toString())),
      catchError(this.handleError('ERRORE DELETE COMP '))
    );
  }

  addComp(comp:Comp , id: string) : Observable<Comp>{
    return this.http.post<Comp>('http://localhost:54424/api/CV/'+id+'/Add/Competenza' , comp).pipe(
      tap(_=> this.log("AGGIUNTA COMP AL CV :" +id)),
      catchError(this.handleError("ERRORE ADD COMP "))
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
