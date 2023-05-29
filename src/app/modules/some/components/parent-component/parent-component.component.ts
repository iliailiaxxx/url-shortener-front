import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  addToArray(data:any) {
    data.url = "https://m.media-amazon.com/images/I/81oDxpfzvwL._AC_UY695_.jpg"
    this.array.push(data)
  }
  array = [{
    name: "Product1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in!",
    sku: "asd",
    url: "https://m.media-amazon.com/images/I/81oDxpfzvwL._AC_UY695_.jpg"
  }, {
    name: "Product2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in!",
    sku: "asd",
    url: "https://m.media-amazon.com/images/I/61dCK2ist4L._AC_SL1000_.jpg"

  }, {
    name: "Product3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in!",
    sku: "asd",
    url: "https://m.media-amazon.com/images/I/5197wzUOikL._AC_.jpg"

  }, {
    name: "Product4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in!",
    sku: "asd",
    url: "https://m.media-amazon.com/images/I/717foItSdPL._AC_UY695_.jpg"

  }]
}
