import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpdateWorktimeComponent } from './update-worktime/update-worktime.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UpdateWorktimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
