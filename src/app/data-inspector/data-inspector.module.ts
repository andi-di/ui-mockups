import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CompleteMaterialModule} from './complete-material/complete-material.module';
import {DataInspectorComponent} from './data-inspector.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CompleteMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    DataInspectorComponent,
    NavigationComponent,
    PageNotFoundComponent,
    MainComponent,
  ],
  exports: [DataInspectorComponent],
  providers: [

  ]
})
export class DataInspectorModule { }
