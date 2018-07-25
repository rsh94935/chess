import { Component, OnInit, Input } from '@angular/core';
import { PawnComponent } from '../game-pieces/pawn/pawn.component'

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() widthHeight: number;
  rows: number[] = [1,2,3,4,5,6,7,8];
  cols: string[] = ["A","B","C","D","E","F","G","H"];
  pieces: any[];
  moves: any[] = [];
  pawn: PawnComponent;

  constructor() {
    this.pawn = new PawnComponent();
  }

  ngOnInit() {
    this.createGame();
    console.log(this.pieces)
  }

  createGame(){
    this.pieces = [];

    this.createPawns();
  }

  createPawns(){
    for( let colCounter = 0; colCounter < this.cols.length; colCounter++ ){
      for( let pieceType = 0; pieceType < 2; pieceType++ ){
        this.pieces.push({"colour": (pieceType === 0 ? "White" : "Black"), "piece": "Pawn", "location": [this.cols[colCounter], (pieceType === 0 ? 2 : 7 )]})
      }
    }
  }

  setWidthAndHeight(division){
    let dimensions = {
      'width': this.widthHeight / division + "px",
      'height': this.widthHeight / division + "px"
    }
    return dimensions;
  }

  setHeight(myPiece, col, row){
    let height = "0px";

    if( myPiece.location[0] === col && myPiece.location[1] === row ){
      height = "100%";
    }

    let style = {
      "height": height
    }

    return style;
  }

  test(myPiece, col, row){
    let retVal = false;

    if( myPiece.location[0] === col && myPiece.location[1] === row ){
      retVal = true;
    }

    return retVal;
  }

  selectPiece(myPiece){
    let moveLocations = this.pawn.getMoves(this.pieces, this.moves, myPiece.location, myPiece.colour);

    console.log(moveLocations);
  }
}
