import { Component } from '@angular/core';
import {PageEvent} from '@angular/material';
import { products } from './products';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gridData: any[] = products;

    public currentProducts = products.slice(0, 10);
    title = 'Hello World!';

    length = 100;
     pageSize = 10;
     pageSizeOptions = [5, 10, 25, 100];
     // MatPaginator Output
     pageEvent: PageEvent;
     setPageSizeOptions(setPageSizeOptionsInput: string) {
       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
     }

     onPageEvent(e) {
       const multi: number = e.pageSize;
       const page: number = e.pageIndex;
       const from: number = page * multi;
       const to: number = page * (multi + 1);
       console.log('page: ' + page + ' index ' + multi + 'getting items ' + from + ' to ' + to);
      this.currentProducts = products.slice(from, to);
     }

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }

    getProducts(start: number, end: number) {
      return products.splice(start, end);
    }
}
