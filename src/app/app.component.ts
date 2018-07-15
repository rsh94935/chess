import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  widthHeight: number = 400;

  setWidthAndHeight(){
    let dimensions = {
      'width': this.widthHeight + "px",
      'height': this.widthHeight + "px"
    }
    return dimensions;
  }
}
