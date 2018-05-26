import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Serializer } from './serializer';
import { Observable ,of , } from 'rxjs';
import { MessageService } from './message.service';
import { catchError , map , tap} from 'rxjs/operators';
import { Gen } from './gen';
import { CvService } from './cv.service';


// const httpOptions = {
// 	headers: new HttpHeaders ( { 'Content-Type' : 'application/json'})
// };
@Injectable({
  providedIn: 'root'
})
export class GenService <T extends Gen> {

  constructor( 
    private http            : HttpClient,
    private url             : string,
    private endpoint        : string,
    private serializer      : Serializer,
  ) { }
  private messageService  : MessageService;

  public create(item:T ): Observable<T>{
    return this.http.post<T>(`${this.url}/${this.endpoint}` , this.serializer.toJson(item))
            .pipe(
              tap((item:T ) => this.log(`aggiunto qualcosa!`)),
              map(data => this.serializer.fromJson(data) as T),
              catchError ( this.handleError<T>(`Create , Aggiungi`))
            );
  }
  public update ( item : T): Observable<T> {
    return this.http.put<T>(`${this.url}/${this.endpoint}/${item.id}`, this.serializer.toJson(item)).pipe(
      map(data => this.serializer.fromJson(data) as T)
    );
  }
  read(id:number): Observable<T> {
    return this.http.get(`${this.url}/${this.endpoint}/${id}`).pipe(
      map((data:any)=> this.serializer.fromJson(data) as T)
    );
  }
  list() : Observable<T[]>{
    return this.http.get(`api/CVS`).pipe(
      map((data:any) => this.convertData(data.items))
    );
  }
  /*
  list(queryOptions: QueryOptions) : Observable<T[]> {
    return this.http.get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`);
  }
  */

  delete(id:number) {
    return this.http.delete(`${this.url}/${this.endpoint}/${id}`);
  }


  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }

  private log(message:string){
		this.messageService.add('HeroService : '+message);
  }
  private handleError<T> (operation = 'operation' , result?:T){
		return (error:any):Observable<T> => {
			console.error(error);
			this.log(`${operation} failed : ${error.message}`);
			return of(result as T);
		}
	}
}
