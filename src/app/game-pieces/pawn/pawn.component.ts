import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pawn',
  templateUrl: './pawn.component.html'
})
export class PawnComponent implements OnInit {
  myLocation: any[];
  moveLocations: any[];
  colour: string;
  test: any;

  constructor() { }

  ngOnInit() {
  }

  getMoves(boardPieces, moves, myLocation, colour){
    this.moveLocations = [];
    this.myLocation = myLocation;
    this.colour = colour;
    let block = this.movements(boardPieces, moves);
    let arrayCounter = 0;

    for( let loopCounter = 2 - block[0]; loopCounter > 0; loopCounter-- ){
      this.moveLocations[arrayCounter] = [this.myLocation[0], this.colourMove(loopCounter)];
      arrayCounter++;
    }

    if( block[1] === 1 || block[1] === 2 ){
      this.moveLocations[arrayCounter] = [String.fromCharCode(this.myLocation[0].charCodeAt(0)-1), this.colourMove(1)];
    }
    if( block[2] === 1 || block[2] === 2 ){
      this.moveLocations[arrayCounter] = [String.fromCharCode(this.myLocation[0].charCodeAt(0)+1), this.colourMove(1)];
    }

    return this.moveLocations;
  }

  movements(boardPieces, moves){
    let retVal = [0, 0, 0];

    if( this.myLocation[1] !== (this.colour === "White"? 2 : 7 ) ){
      retVal[0] = 1;
    }

    for(let piece of boardPieces){
      retVal[0] = this.moveForward(piece, retVal[0]);

      retVal = this.takeForward(piece, retVal);
    }

    let lastMove = moves[moves.length-1];
    
    if( lastMove !== undefined ){
      retVal = this.enPassant(lastMove, retVal);
    }

    return retVal;
  }

  moveForward(piece, retVal){
    if( piece.location[0] === this.myLocation[0] && piece.location[1] === this.colourMove(1) ){
      return 2;
    }
    else if( retVal !== 2 && this.myLocation[1] === (this.colour === "White"? 2 : 7 ) && piece.location[1] === (this.colour === "White"? 4 : 5 )){
      this.test = this.myLocation[1]
      return 0;
    }

    return retVal;
  }

  takeForward(piece, retVal){
    if( piece.location[1] === this.colourMove(1) && this.colour !== piece.colour ){
      if( piece.location[0] === String.fromCharCode(this.myLocation[0].charCodeAt(0)-1)){
        retVal[1] = 1;
      }
      if( piece.location[0] === String.fromCharCode(this.myLocation[0].charCodeAt(0)+1)){
        retVal[2] = 1;
      }
    }

    return retVal;
  }
  
  enPassant( lastMove, retVal ){
    if( lastMove.colour != this.colour && lastMove.piece === "Pawn" && lastMove.moveTo[1] == this.myLocation[1] && lastMove.moveFrom[0] === lastMove.moveTo[0] ){
      if( lastMove.moveTo[0] === String.fromCharCode(this.myLocation[0].charCodeAt(0)-1)){
        retVal[1] = 2;
      }
      if( lastMove.moveTo[0] === String.fromCharCode(this.myLocation[0].charCodeAt(0)+1)){
        retVal[2] = 2;
      }
    }

    return retVal;
  }

  colourMove(spacesAllowed: number){
    if( this.colour === "White" ){
      return this.myLocation[1]+spacesAllowed;
    }
    else{
      return this.myLocation[1]-spacesAllowed;
    }
  }

}
