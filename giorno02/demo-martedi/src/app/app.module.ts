import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomPipe } from './pipes/custom-pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { ContextService } from './services/context.service';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    CustomPipe,
    ProductCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ContextService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
