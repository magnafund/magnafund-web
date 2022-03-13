import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
