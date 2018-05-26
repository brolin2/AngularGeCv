import { Gen } from './gen';

export interface Serializer {
    fromJson(json: any ): Gen;
    toJson(gen: Gen) : any;
}