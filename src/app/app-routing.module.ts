import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "**", redirectTo: "", pathMatch: "full"},
	],{ preloadingStrategy: PreloadAllModules })    
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
