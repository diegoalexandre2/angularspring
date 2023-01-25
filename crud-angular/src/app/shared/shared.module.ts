import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialosComponent } from './components/error-dialos/error-dialos.component';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [

    ErrorDialosComponent,
     CategoryPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialosComponent,
    CategoryPipe
   ]
})
export class SharedModule { }
