import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SharedComponent } from './shared/shared.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './product/product.component';

import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SharedComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
