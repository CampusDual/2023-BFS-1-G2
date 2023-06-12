import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-home',
  templateUrl: './cars-home.component.html',
  styleUrls: ['./cars-home.component.css']
})
export class CarsHomeComponent implements OnInit {

  // username: string = 'demo'
  // password: string = 'demouser'

  // auth: string = "Basic " + btoa(`${this.username}:${this.password}`)

  // carsList: Array<Object>

//-- IMAGEN -->

// public dataBase64= "data:image/png;base64,iV BORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHd hcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHjSURBVDjLdZO/alVBEMZ/5+TemxAbFUUskqAoSOJNp4KC 4AsoPoGFIHY+gA+jiJXaKIiChbETtBYLUbSMRf6Aydndmfks9kRjvHdhGVh2fvN9uzONJK7fe7Ai6algA 3FZCAmQqEF/dnihpK1v7x7dPw0woF64Izg3Xl5s1n9uIe0lQYUFCtjc+sVuEqHBKfpVAXB1vLzQXFtdYP HkGFUCoahVo1Y/fnie+bkBV27c5R8A0pHxyhKvPn5hY2MHRQAQeyokFGJze4cuZfav3gLNYDTg7Pklzpw 4ijtIQYRwFx6BhdjtCk+erU0CCPfg+/o2o3ZI13WUlLGo58YMg+GIY4dmCWkCAAgPzAspJW5ePFPlV3VI 4uHbz5S5IQfy/yooHngxzFser30iFcNcuAVGw3A0Ilt91IkAsyCXQg5QO0szHEIrogkiguwN2acCoJhjn ZGKYx4Ujz5WOA2YD1BMU+BBSYVUvNpxkXuIuWgbsOxTHrG3UHIFWIhsgXtQQpTizNBS5jXZQkhkcywZqQ QlAjdRwiml7wU5xWLaL1AvZa8WIjALzIRZ7YVWDW5CiIj48Z8F2pYLl1ZR0+AuzEX0UX035mxIkLq0dhD w5vXL97fr5O3rfwQHJhPx4uuH57f2AL8BfPrVlrs6xwsAAAAASUVORK5CYII=";

//-- IMAGEN 

  // public imagebase64;

  // protected body = {
  //   filter: {
  //     // user_id: this.user_id
  //   },
  //   columns: ["car_id" ,"user_id", "brand", "model", "location","start_date_available", "plate", "end_date_available", "car_photo"]}
    

  // constructor() { }

  // async ngOnInit() {
    
  //   try{

  //    const {data} = await fetch('http://localhost:33333/cars/car/search', {
  //       method: 'POST', 
  //       body: JSON.stringify(this.body),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //         "Authorization": this.auth
  //     }
  //     }).then(res => res.json())
        
  //     this.carsList = data.filter(car => {
  //       return car.user_id === sessionStorage.getItem("user_id")
  //     })
      
  //     console.log(sessionStorage.getItem("user_id"))
  //     console.log(this.carsList)

  //   }catch(e){

  //     console.log(e.message)
  //   } 
  // }


  ngOnInit(): void {
    
  }
  constructor(){}
  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
  
}


