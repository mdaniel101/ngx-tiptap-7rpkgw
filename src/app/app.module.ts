import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxTiptapModule } from 'ngx-tiptap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxTiptapModule],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
