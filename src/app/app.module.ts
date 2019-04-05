import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowEventsComponent } from './show-events/show-events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { SearchEventComponent } from './search-event/search-event.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowEventsComponent,
    NewEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    SearchEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
