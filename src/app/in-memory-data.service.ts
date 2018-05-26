import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){

        const CVS  = [
            {id:1 ,nome:'Dragos', cognome:'Brinzila' , eta:22},
            {id:2 ,nome:'Matteo', cognome:'Tani' , eta:24},
            {id:3 ,nome:'Alessio', cognome:'Gelardi' , eta:20},
            {id:4 ,nome:'Aziz', cognome:'Naumi' , eta:21},
            {id:5 ,nome:'Luca', cognome:'Salzone' , eta:33},
            {id:6 ,nome:'Edoardo', cognome:'Bevione' , eta:25},
            {id:7 ,nome:'Massimo', cognome:'Franzoso' , eta:19},
            {id:8 ,nome:'Florin', cognome:'Gheliuc' , eta:23},
            {id:9 ,nome:'Carmela', cognome:'Capoplaza' , eta:35}
        ];
        return {CVS};
        
    }
}