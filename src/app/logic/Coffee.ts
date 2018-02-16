import PlaceLocation from './PlaceLocation';
import TastingRating from './TastingRating';
class Coffee {
    //Properties
    type:string;
    rating:number;
    notes:string;
    tastingRating: TastingRating;

    constructor(public name:string, public place: string, public location: PlaceLocation){

    }
}

export default Coffee;