import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
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
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';
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
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: ShowEventsComponent
  },
  {
    path: 'new-event',
    component: NewEventComponent
  },
  {
    path: 'edit-event/:id',
    component: EditEventComponent
  },
  {
    path: 'delete-event/:id',
    component: DeleteEventComponent
  },
  {
    path: 'search-event',
    component: SearchEventComponent
  },
  {
    path: 'menus',
    component: ShowMenusComponent
  },
  {
    path: 'new-menu',
    component: NewMenuComponent
  },
  {
    path: 'edit-menu/:id',
    component: EditMenuComponent
  },
  {
    path: 'delete-menu/:id',
    component: DeleteMenuComponent
  },
  {
    path: 'search-menu',
    component: SearchMenuComponent
  },
  {
    path: 'menu-items',
    component: ShowMenuItemsComponent
  },
  {
    path: 'new-menu-item',
    component: NewMenuItemComponent
  },
  {
    path: 'edit-menu-item/:id',
    component: EditMenuItemComponent
  },
  {
    path: 'delete-menu-item/:id',
    component: DeleteMenuItemComponent
  },
  {
    path: 'search-menu-item',
    component: SearchMenuItemComponent
  },
  {
    path: 'menu-item-ingredients',
    component: ShowMenuItemIngredientsComponent
  },
  {
    path: 'new-menu-item-ingredient',
    component: NewMenuItemIngredientComponent
  },
  {
    path: 'edit-menu-item-ingredient/:id',
    component: EditMenuItemIngredientComponent
  },
  {
    path: 'delete-menu-item-ingredient/:id',
    component: DeleteMenuItemIngredientComponent
  },
  {
    path: 'search-menu-item-ingredient',
    component: SearchMenuItemIngredientComponent
  },
  {
    path: 'tasks',
    component: ShowTasksComponent
  },
  {
    path: 'new-task',
    component: NewTaskComponent
  },
  {
    path: 'edit-task/:id',
    component: EditTaskComponent
  },
  {
    path: 'delete-task/:id',
    component: DeleteTaskComponent
  },
  {
    path: 'search-task',
    component: SearchTaskComponent
  },
  {
    path: 'stores',
    component: ShowStoresComponent
  },
  {
    path: 'new-store',
    component: NewStoreComponent
  },
  {
    path: 'edit-store/:id',
    component: EditStoreComponent
  },
  {
    path: 'delete-store/:id',
    component: DeleteStoreComponent
  },
  {
    path: 'search-store',
    component: SearchStoreComponent
  },
  {
    path: 'invitees',
    component: ShowInviteesComponent
  },
  {
    path: 'new-invitee',
    component: NewInviteeComponent
  },
  {
    path: 'edit-invitee/:id',
    component: EditInviteeComponent
  },
  {
    path: 'delete-invitee/:id',
    component: DeleteInviteeComponent
  },
  {
    path: 'search-invitee',
    component: SearchInviteeComponent
  },
  {
    path: 'recipes',
    component: RecipeSearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
