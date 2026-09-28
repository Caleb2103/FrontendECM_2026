import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const searchRoutes: Route[] = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    RouterModule.forChild(searchRoutes),
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule
  ]
})
export class SearchModule {}
