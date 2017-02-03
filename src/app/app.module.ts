import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; // to use Http methods
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// router module
import { routes } from './app.routing';

// other modules
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule,
             HomeModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }