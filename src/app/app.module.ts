import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { HomeworksModule } from './homeworks/homeworks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule,
    HomeworksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
