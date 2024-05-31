import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25;
  }

  // Angular dentro de su ciclo de deteccion de cambios no esta pendiente de cambios realizados por codigo de JS, tenerlo en cuenta
  resetForm(): void {
    this.name  = 'Ironman';
    this.age = 45;

    // Ejemplo de codigo JS, que estaria fuera del ciclo de detección de cambios de Angular
    /*
      document.querySelectorAll('h1')!.forEach( element => {
        element.innerHTML = '<h1> Cambio de H1 desde Angular </h1>'
      });
    */
  }

}
