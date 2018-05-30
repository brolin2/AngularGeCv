import { Cv } from './cv';


export class CvSerializer {
    fromJson(json:any ) : Cv{
        const cv = new Cv ();
        cv.id=json.id;
        cv.Nome=json.nome;
        cv.Cognome=json.cognome;
        cv.Eta=json.eta;
        return cv;
    }
    toJson(cv: Cv ): any {
        return{
            id:cv.id,
            nome:cv.Nome,
            cognome:cv.Cognome

        };
    }
}