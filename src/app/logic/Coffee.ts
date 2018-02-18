import PlaceLocation from './PlaceLocation';
import TastingRating from './TastingRating';
class Coffee {
    //Properties
    type:string;
    rating:number;
    notes:string;
    tastingRating: TastingRating;
    _id:string

    constructor(public name:string ="",
                 public place: string="",
                 public location: PlaceLocation=null) {
                     this.location = new PlaceLocation();
                     this.tastingRating = new TastingRating();
    }
}

export default Coffee;