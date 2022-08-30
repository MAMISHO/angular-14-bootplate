import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../models/dtos/product.dto';
import { ProductSearchService } from '../../services/product-search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: ProductDTO[] = [];

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.productSearchService.getAllProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
