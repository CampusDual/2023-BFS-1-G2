import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  randonImage: Array<string> = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Carro_Rojo_jun_Bog_2019.jpg/1024px-Carro_Rojo_jun_Bog_2019.jpg',
   'https://motor.elpais.com/wp-content/uploads/2019/03/Ford-Fiesta-3door-UK-2008-1920x1080-007-1440x740.jpg',
    'https://www.cochesbbb.com/wp-content/uploads/elementor/thumbs/Seat-Ibiza-pkjnhcah3yojkl8esqn35v4rnlzvyswk4dqiuh26x4.jpg',
    'https://www.tengotucoche.net/archivos/catalogo/catalogo-jpg-363-1678443366-img20230223125553.jpg'
  ] 

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

  }

  public funcion = () => {}
  
  public getRandomImage(): string {
    return this.randonImage[Math.floor(Math.random() * 3)]
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }

}
