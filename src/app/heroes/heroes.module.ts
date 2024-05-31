import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

// El CommonModule importado desde @angular/common, para poder utilizar las directivas de *ngIf, *ngFor, dentro de nuestors componentes encapsulados de hero y list
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ]
})
export class HeroesModule {

}
