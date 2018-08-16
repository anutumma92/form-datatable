import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

import { DataTableModule } from 'angular5-data-table';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DataTableModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

