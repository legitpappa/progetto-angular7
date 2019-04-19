import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliccamiComponent } from './cliccami/cliccami.component';
import { EroeFormComponent } from './eroe-form/eroe-form.component';
import { EditorNameComponent } from './editor-name/editor-name.component';
import { ComponenteReattivoComponent } from './componente-reattivo/componente-reattivo.component';
import { HttpClientModule } from '@angular/common/http';
import { AutocompilerService } from './services/autocompiler.service';
import { GoogleService } from './services/google.service';

@NgModule({
  declarations: [
    AppComponent,
    CliccamiComponent,
    EroeFormComponent,
    EditorNameComponent,
    ComponenteReattivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutocompilerService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
