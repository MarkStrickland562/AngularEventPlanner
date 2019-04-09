import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { ShowMenuItemsComponent } from './show-menu-items/show-menu-items.component';
import { NewMenuItemComponent } from './new-menu-item/new-menu-item.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';
import { DeleteMenuItemComponent } from './delete-menu-item/delete-menu-item.component';
import { SearchMenuItemComponent } from './search-menu-item/search-menu-item.component';
import { ShowMenuItemIngredientsComponent } from './show-menu-item-ingredients/show-menu-item-ingredients.component';
import { NewMenuItemIngredientComponent } from './new-menu-item-ingredient/new-menu-item-ingredient.component';
import { EditMenuItemIngredientComponent } from './edit-menu-item-ingredient/edit-menu-item-ingredient.component';
import { DeleteMenuItemIngredientComponent } from './delete-menu-item-ingredient/delete-menu-item-ingredient.component';
import { SearchMenuItemIngredientComponent } from './search-menu-item-ingredient/search-menu-item-ingredient.component';
import { ShowStoresComponent } from './show-stores/show-stores.component';
import { NewStoreComponent } from './new-store/new-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { DeleteStoreComponent } from './delete-store/delete-store.component';
import { SearchStoreComponent } from './search-store/search-store.component';
import { ShowInviteesComponent } from './show-invitees/show-invitees.component';
import { NewInviteeComponent } from './new-invitee/new-invitee.component';
import { EditInviteeComponent } from './edit-invitee/edit-invitee.component';
import { DeleteInviteeComponent } from './delete-invitee/delete-invitee.component';
import { SearchInviteeComponent } from './search-invitee/search-invitee.component';

import { SearchEventPipe } from './search-event.pipe';

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
    SearchTaskComponent,
    ShowMenuItemsComponent,
    NewMenuItemComponent,
    EditMenuItemComponent,
    DeleteMenuItemComponent,
    SearchMenuItemComponent,
    ShowMenuItemIngredientsComponent,
    NewMenuItemIngredientComponent,
    EditMenuItemIngredientComponent,
    DeleteMenuItemIngredientComponent,
    SearchMenuItemIngredientComponent,
    ShowStoresComponent,
    NewStoreComponent,
    EditStoreComponent,
    DeleteStoreComponent,
    SearchStoreComponent,
    ShowInviteesComponent,
    NewInviteeComponent,
    EditInviteeComponent,
    DeleteInviteeComponent,
    SearchInviteeComponent,
    SearchEventPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
