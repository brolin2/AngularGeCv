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

  getComp(idc:string , idcv : string  ) : Observable<Comp>{
    return this.http.get<Comp>('http://localhost:54424/api/CV/'+idcv+'/Competenza/'+ idc).pipe(
      tap(_=> this.log("Presa Competenza id : " +idc)),
      catchError(this.handleError("ERRORE GET COMPETENZA")),
      
    );
  }
  getListComp(id: string ) : Observable<Comp[]>{
    return this.http.get<Comp[]>('http://localhost:54424/api/CV/'+id+'/Competenza').pipe(
      tap(_=> this.log("Presa ListaComp  CV : " +id)),
      catchError(this.handleError("ERRORE GET LIST "))
    );
  }
  updateComp(idcv:string , comp :  Comp) : Observable<any>{
    return this.http.put<Comp>('http://localhost:54424/api/CV/'+idcv+'/Competenza/Put/'+comp.Id.toString() , comp).pipe(
      tap(_ => this.log("UPDATE COMP ID = " + comp.Id.toString())),
      catchError(this.handleError("ERRORE UPDATE"))
    );
  }
  deleteComp(idc:string , idcv : string): Observable<any> {
    return this.http.delete<Comp>('http://localhost:54424/api/CV/'+idcv+'/Competenza/Del/'+ idc ).pipe(
      tap(_=> this.log("ELIMINATA COMP ID: " +idc)),
      catchError(this.handleError('ERRORE DELETE COMP '))
    );
  }

  addComp(comp:Comp , id: string) : Observable<Comp>{
    return this.http.post<Comp>('http://localhost:54424/api/CV/'+id+'/Competenza/Add' , comp).pipe(
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
