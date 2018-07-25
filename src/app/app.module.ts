import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PawnComponent } from './game-pieces/pawn/pawn.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PawnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
