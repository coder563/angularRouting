import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import testConfig from "../env/test.config"
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:"products", component:ProductListComponent},
      {path:"products/:id", component:ProductDetailComponent}
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
