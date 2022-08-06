import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostFormComponent } from './search-form/search-form.component';
import { WordComponent } from './word/word.component';
import { AddWordComponent } from './add-word/add-word.component';
import { BackendHttpService } from './services/backend-http.service';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    WordComponent,
    AddWordComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BackendHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
