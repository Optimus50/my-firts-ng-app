import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {WarningComponent} from './warning/warning.component';
import {SuccessalertComponent} from './successalert/successalert.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessalertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
