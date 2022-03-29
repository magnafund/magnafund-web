import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '@crowdfunding/layouts';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutsModule, RouterModule.forRoot([]), AppRoutingModule, HttpClientModule],
  providers: [MessageService, ],
  bootstrap: [AppComponent],
  exports: [
    HomePageComponent
  ],
})
export class AppModule {}
