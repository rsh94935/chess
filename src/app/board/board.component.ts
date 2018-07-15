import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() widthHeight: number;
  rows: number[] = [1,2,3,4,5,6,7,8];
  cols: string[] = ["A","B","C","D","E","F","G","H"];

  constructor() { }

  ngOnInit() {
  }

  setWidthAndHeight(division){
    let dimensions = {
      'width': this.widthHeight / division + "px",
      'height': this.widthHeight / division + "px"
    }
    return dimensions;
  }

}
