import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';

import { CardSectionComponent } from './card-section/card-section.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http';
import { TaglistComponent } from './taglist/taglist.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    
    CardSectionComponent,
         FooterComponent,
         TaglistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
