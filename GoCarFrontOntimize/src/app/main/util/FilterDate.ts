import { BBDD } from "./BBDD"

export class FilterDate {

   constructor() {}

    public filterDate(date: Object, infoRentCars: any[]): boolean{

       let parsedDate = this.parseDate(date) 

        for(let i = 0; i <= infoRentCars.length; i++) {
            if(parsedDate >= infoRentCars[i].rental_start_date && parsedDate <= infoRentCars[i].rental_end_date) {
                console.log('El dia no esta disponible', parsedDate);
               return false
            }
            else{ 
                console.log('El dia esta disponible', parsedDate);
                return true
            }
        }

        
        
       
    }

    public parseDate(date: Object) {
        let parsedDate = new Date(date._d)
        return parsedDate;

    }

    }


