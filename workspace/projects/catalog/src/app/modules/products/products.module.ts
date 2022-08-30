import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '../auth/auth.module';
import { ProductApiService } from './api/product-api.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductManagementPage } from './pages/product-management/product-management.page';
import { ProductUploaderPage } from './pages/product-uploader/product-uploader.page';
import { ProductsRoutesModule } from './products-routing.module';
import { ProductSearchService } from './services/product-search.service';

@NgModule({
  declarations: [ProductManagementPage, ProductUploaderPage, ProductListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, ProductsRoutesModule, AuthModule],
  providers: [ProductSearchService, ProductApiService]
})
export class ProductModule {}
