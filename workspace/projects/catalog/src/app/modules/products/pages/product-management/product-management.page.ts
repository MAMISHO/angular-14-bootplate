import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-page',
  templateUrl: './product-management.page.html'
})
export class ProductManagementPage implements OnInit {
  constructor() {}

  async ngOnInit() {
    console.log('me llaman viewer');
  }
}
