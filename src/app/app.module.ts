import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FileDragDropDirective } from "./directives/file-drag-drop.directive";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, FileDragDropDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
