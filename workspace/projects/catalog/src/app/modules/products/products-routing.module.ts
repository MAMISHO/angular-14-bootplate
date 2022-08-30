import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementPage } from './pages/product-management/product-management.page';
import { ProductUploaderPage } from './pages/product-uploader/product-uploader.page';

const routes: Routes = [
  {
    path: '',
    component: ProductManagementPage,
    children: []
  },
  { path: 'upload', component: ProductUploaderPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutesModule {}
// export const ProfessionalsRoutes = RouterModule.forChild(routes);
