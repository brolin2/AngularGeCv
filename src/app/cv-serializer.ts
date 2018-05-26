import { Cv } from './cv';


export class CvSerializer {
    fromJson(json:any ) : Cv{
        const cv = new Cv ();
        cv.id=json.id;
        cv.nome=json.nome;
        cv.cognome=json.cognome;
        cv.eta=json.eta;
        return cv;
    }
    toJson(cv: Cv ): any {
        return{
            id:cv.id,
            nome:cv.nome,
            cognome:cv.cognome

        };
    }
}