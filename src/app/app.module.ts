import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CountryListService } from './country-list.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, BasicFormComponent],
	imports: [BrowserModule, ReactiveFormsModule],
	providers: [CountryListService],
	bootstrap: [AppComponent]
})
export class AppModule { }
