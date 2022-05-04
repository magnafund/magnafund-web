import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '@crowdfunding/layouts';
import { UiModule } from '@crowdfunding/ui';
import { DonationsModule } from '@crowdfunding/donations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoader } from '@crowdfunding/core';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    LayoutsModule, UiModule, 
    RouterModule.forRoot([]), 
    AppRoutingModule, 
    HttpClientModule, 
    DonationsModule,
    NgxUiLoaderModule.forRoot(UiLoader.load()),
    NgxUiLoaderHttpModule],
  providers: [MessageService, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [
    HomePageComponent
  ],
})
export class AppModule {}
