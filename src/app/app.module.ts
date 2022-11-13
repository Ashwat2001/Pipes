import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from '@angular/common/http';
import { MBPipe } from './mb.pipe';
import { GBPipe } from './gb.pipe';
import { TBPipe } from './tb.pipe';
import { ChangePipe } from './change.pipe';
import { MaskPipe } from './mask.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MBPipe,
    GBPipe,
    TBPipe,
    ChangePipe,
    MaskPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
