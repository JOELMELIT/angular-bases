import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Clase creada por defecto
/*export class AppComponent {
  title = 'bases';
}*/

// Agregamos unas modificaciones para hacerlo mas entendible
export class AppComponent {

  public title: string = 'Hola Mundo';

}
