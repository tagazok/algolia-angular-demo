import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { AlgoliaModule, AlgoliaService } from '@tagazok/algolia-angular-components'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlgoliaModule.forRoot({appId: 'latency', apiKey: '6be0576ff61c053d5f9a3225e2a90f76'}),
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [AlgoliaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
