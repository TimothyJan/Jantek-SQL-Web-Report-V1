import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const modules = [
  MatSlideToggleModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
