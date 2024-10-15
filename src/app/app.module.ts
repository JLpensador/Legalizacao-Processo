import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardProcessosComponent } from './components/card-processos/card-processos.component';
import { AlvaraComponent } from './pages/alvara/alvara.component';
import { CardAlvaraEstadosComponent } from './components/card-alvara-estados/card-alvara-estados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardProcessosComponent,
    AlvaraComponent,
    CardAlvaraEstadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
