import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomPipe } from './pipes/custom-pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { ContextService } from './services/context.service';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailByNavigationComponent } from './product-detail-by-navigation/product-detail-by-navigation.component';
import { ProductsService } from './services/products.service';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    CustomPipe,
    ProductCardComponent,
    LoginComponent,
    WelcomeComponent,
    NotFoundComponent,
    MenuComponent,
    ProductDetailByNavigationComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'xxxxxxxxxxxx'
    })
  ],
  providers: [ContextService, AuthenticationService, ProductsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
