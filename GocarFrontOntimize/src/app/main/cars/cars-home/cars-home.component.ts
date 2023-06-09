import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-home',
  templateUrl: './cars-home.component.html',
  styleUrls: ['./cars-home.component.css']
})
export class CarsHomeComponent implements OnInit {

  username: string = 'demo'
  password: string = 'demouser'

  auth: string = "Basic " + btoa(`${this.username}:${this.password}`)

  carsList: Array<Object>
  
  protected body = {
    filter: {
      // user_id: this.user_id
    },
    columns: ["user_id", "brand", "model", "location","start_date_available", "plate", "end_date_available"]}
    

  constructor() { }

  async ngOnInit() {
    
    try{

     const {data} = await fetch('http://localhost:33333/cars/car/search', {
        method: 'POST', 
        body: JSON.stringify(this.body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": this.auth
      }
      }).then(res => res.json())
        
      this.carsList = data.filter(car => {
        return car.user_id === sessionStorage.getItem("user_id")
      })
      
      console.log(sessionStorage.getItem("user_id"))
      console.log(this.carsList)

    }catch(e){

      console.log(e.message)
    } 
  }


  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
  
}


