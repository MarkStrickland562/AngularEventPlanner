import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ShowEventsComponent } from './show-events/show-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';

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
    path: 'edit-event/:id',
    component: EditEventComponent
  },
  {
    path: 'delete-event/:id',
    component: DeleteEventComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
