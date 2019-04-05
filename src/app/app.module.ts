import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowEventsComponent } from './show-events/show-events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { SearchEventComponent } from './search-event/search-event.component';
import { ShowMenusComponent } from './show-menus/show-menus.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { MainComponent } from './main/main.component';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowEventsComponent,
    NewEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    SearchEventComponent,
    ShowMenusComponent,
    NewMenuComponent,
    EditMenuComponent,
    DeleteMenuComponent,
    SearchMenuComponent,
    MainComponent,
    ShowTasksComponent,
    NewTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    SearchTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
