import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssetPortfolioComponent } from './asset-portfolio/asset-portfolio.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetPortfolioComponent,
    AssetDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
