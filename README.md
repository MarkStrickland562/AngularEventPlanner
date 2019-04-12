## **Mark Strickland**

[<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562)

[**MarkStrickland562**](https://github.com/MarkStrickland562)

## **eHappenings Event Planner (Angular)**

###### Created April 5, 2019. Finalized April 12, 2019.

----------

## Description
This project is a re-development of a C#-based team project from the Epicodus C# class called *eHappenings*. The C# code has been converted to javascript and Angular
and the C# Model/View/Controller structure has been converted to the Angular Model/View/Component structure.
Much of the styling has been kept from the C# project and credit for the styling goes to Clara Munro and Micaela Jawor. Credit for the format of this README largely goes to Shawn Lunsford.

## Known Bugs

No known bugs.

## Project Plan

### Part One (Week #1)
###### 1) Develop technical architecture.
###### 2) Set up the project.
<details>
<summary>Click Here for Details</summary>
This assumes that node is already installed, but verify with "node -v".
1) Install the required projects by executing the following commands at the bash prompt:
    $ npm install typescript -g
    $ npm install bootstrap --save
    $ apm install atom-typescript
    $ npm install -g @angular/cli@1.6.5
    $ cd desktop
    $ ng new AngularEventPlanner
    $ npm install bootstrap --save
2) Populate .gitignore with:
    node_modules/
    .DS_Store
    dist/
    .env
3) Point Angular to the installed Bootstrap node module by adding the following to .angular-cli.json in the styles array so that it looks like this:
  "styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
  ],
4) Add the Forms Module to app.module.ts. In the top section of imports add "import { FormsModule } from '@angular/forms'". In the @ngModule section in the imports array, add ", FormsModule" after "BrowserModule".
</details>

###### 3) Create model classes for the data.
<details>
<summary>Click Here for Details</summary>
Create and populate the following scripts for the model classes:
<table>
  <tr>
    <th>Class Name</th>
    <th>File Name</th>
    <th>Class Code</th>
  </tr>
  <tr>
    <td>Event</td>
    <td>src/models/event.model.ts</td>
    <td>export class Event {<br>constructor (public eventName: string<br>public eventDate: Date = new Date(),<br>public eventLocation: string,<br>
             public menusId: number) {}<br>}</td>
  </tr>    
  <tr>
    <td>Menu</td>
    <td>src/models/menu.model.ts</td>
    <td>export class Menu {<br>constructor (public menuTheme: string){}<br>}</td>
  </tr>    
  <tr>
    <td>MenuItem</td>
    <td>src/models/menuItem.model.ts</td>
    <td>export class MenuItem {<br>constructor(number,<br>public menuItemDescription: string) {}<br>}</td>
  </tr>
  <tr>
    <td>MenuItemIngredient</td>
    <td>src/models/menuItemIngredient.model.ts</td>
    <td>export class MenuItemIngredient {<br>constructor(public ingredientDescription: string,<br>public menuItemsId: number,<br>public storeId: number) {}<br>}</td>
  </tr>
  <tr>
    <td>Task</td>
    <td>src/models/task.model.ts</td>
    <td>export class Task {<br>constructor(public taskDescription: string,<br>public taskPlannedStartDateTime: Date = new Date()) {}<br>}</td>
  </tr>
  <tr>
    <td>Invitee</td>
    <td>src/models/invitee.model.ts</td>
    <td>export class Invitee {<br>constructor(number,<br>
              public inviteeName: string,<br>public inviteeEmailAddress: string) {}<br>}</td>
  </tr>
</table>
</details>

###### 4) Create a JSON file of data to load into the Firebase database (app/mock-data/all-data.json).

###### 5) Create component templates for showing, adding, editing, deleting and searching for model-related objects.
<details>
<summary>Click Here for Details</summary>
<table>
  <tr>
    <td>Create the Welcome, About and Main child components</td>
    <td>
$ ng generate component welcome

$ ng generate component main

$ ng generate component about
    </td>
  <tr>
</table>
2) Create the Event child components by executing the following commmands at the bash prompt:
  $ ng generate component show-events
  $ ng generate component new-event
  $ ng generate component edit-event
  $ ng generate component delete-event
  $ ng generate component search-event
3) Create the Menu child components by executing the following commmands at the bash prompt:
    $ ng generate component show-menus
    $ ng generate component new-menu
    $ ng generate component edit-menu
    $ ng generate component delete-menu
    $ ng generate component search-menu
4) Create the Task child components by executing the following commmands at the bash prompt:
    $ ng generate component show-tasks
    $ ng generate component new-task
    $ ng generate component edit-task
    $ ng generate component delete-task
    $ ng generate component search-task
5) Create the MenuItem child components by executing the following commmands at the bash prompt:
    $ ng generate component show-menu-items
    $ ng generate component new-menu-item
    $ ng generate component edit-menu-item
    $ ng generate component delete-menu-item
    $ ng generate component search-menu-item
6) Create the MenuItemIngredient child components by executing the following commmands at the bash prompt:
    $ ng generate component show-menu-item-ingredients
    $ ng generate component new-menu-item-ingredient
    $ ng generate component edit-menu-item-ingredient
    $ ng generate component delete-menu-item-ingredient
    $ ng generate component search-menu-item-ingredient
7) Create the Store child components by executing the following commmands at the bash prompt:
    $ ng generate component show-stores
    $ ng generate component new-store
    $ ng generate component edit-store
    $ ng generate component delete-store
    $ ng generate component search-store
8) Create the Invitee child components by executing the following commmands at the bash prompt:
    $ ng generate component show-invitees
    $ ng generate component new-invitee
    $ ng generate component edit-invitee
    $ ng generate component delete-invitee
    $ ng generate component search-invitee
9) Create the app-header, app-script-sidebar, app-sidenav and app-top-right-nav child components by executing the following commands at the bash prompt:
  $ ng generate component app-header
  $ ng generate component app-script-sidebar
  $ ng generate component app-sidenav
  $ ng generate component app-top-right-nav

10) Create the Recipe Search child component by executing the following command at the bash prompt:
    $ ng generate component recipe-search
</details>

###### 6) Develop views for showing data for all model classes.
###### 7) Develop functional CRUD views for Events.
###### 8) Create pipes for use by the Search components.
###### 9) Add basic styling in a single page.

### Part Two (Week #2)
###### 1) Add routes for the components and convert to routing.
###### 2) Complete development of CRUD and Search functionality for all classes.
###### 3) Convert the mock data into JSON and load the data into a Firebase database.
###### 4) Add services and dependency-injection for accessing the database.
###### 5) Add deployment to Firebase.
###### 6) Add an API call.
###### 7) Add user authentication
###### 8) Incorporate the styling from the C# project.

## Technical Architecture

<details>
  <summary>Click Here for an Overview of the Data Model</summary>

  <table>
    <tr>
      <th>Model</th>
      <th>Properties</th>
      <th>Typescript Data Types</th>
    </tr>
    <tr>
      <td>Event</td>
      <td>eventName<br>eventLocation<br>menusId</td>
      <td>string<br>string<br>number</td>
    </tr>    
    <tr>
      <td>Menu</td>
      <td>menuTheme</td>
      <td>string</td>
    </tr>   
    <tr>
      <td>Task</td>
      <td>taskDescription<br>taskPlannedStartDateTime</td>
      <td>string<br>Date</td>
    </tr>
    <tr>
      <td>Menu Item</td>
      <td>menuItemDescription</td>
      <td>string</td>
    </tr>
    <tr>
      <td>Menu Item Ingredient</td>
      <td>ingredientDescription<br>menuItemsId<br>storeId</td>
      <td>string<br>number<br>number</td>
    </tr>
    <tr>
      <td>Store</td>
      <td>storeName</td>
      <td>string</td>
    </tr>
    <tr>
      <td>Invitee</td>
      <td>inviteeName<br>inviteeEmailAddress</td>
      <td>string<br>string</td>
    </tr>
  </table>
</details>

<details>
  <summary>Click Here for an Overview of the Components and Routes</summary>

  <table>
    <tr>
      <th>General Components</th>
    </tr>
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>AppComponent</td>
      <td>app-root</td>
      <td>N/A/</td>
      <td>Default root component</td>
    </tr>
    <tr>
      <td>WelcomeComponent</td>
      <td>app-welcome</td>
      <td>http:/localhost:4200/</td>
      <td>Displays the Welcome page</td>
    </tr>
    <tr>
      <td>MainComponent</td>
      <td>app-main</td>
      <td>http:/localhost:4200/main</td>
      <td>Displays the main navigation page</td>
    </tr>
      <td>AboutComponent</td>
      <td>app-about</td>
      <td>http:/localhost:4200/about</td>
      <td>Displays the About page</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Event Components</th>
    </tr>  
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ShowEventsComponent</td>
      <td>app-show-events</td>
      <td>http:/localhost:4200/events</td>
      <td>Displays the list of events</td>
    </tr>
    <tr>
      <td>NewEventComponent</td>
      <td>app-new-event</td>
      <td>http:/localhost:4200/new-event</td>
      <td>Displays a form for adding a new event</td>
    </tr>
    <tr>
      <td>EditEventComponent</td>
      <td>app-edit-event</td>
      <td>http:/localhost:4200/edit-event/:id</td>
      <td>Displays a form for editing an event</td>
    </tr>
    <tr>
      <td>DeleteEventComponent</td>
      <td>app-delete-event</td>
      <td>http:/localhost:4200/delete-event/:id</td>
      <td>Responds to a button click to delete an event</td>
    </tr>
    <tr>
      <td>SearchEventComponent</td>
      <td>app-search-event</td>
      <td>http:/localhost:4200/search-event</td>
      <td>Displays a form for searching for an event by event name</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Menu Components</th>
    </tr>  
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ShowMenusComponent</td>
      <td>app-show-menus</td>
      <td>http:/localhost:4200/menus</td>
      <td>Displays the list of menus</td>
    </tr>
    <tr>
      <td>NewMenuComponent</td>
      <td>app-new-menu</td>
      <td>http:/localhost:4200/new-menu</td>
      <td>Displays a form for adding a new menu</td>
    </tr>
    <tr>
      <td>EditMenuComponent</td>
      <td>app-edit-menu</td>
      <td>http:/localhost:4200/edit-menu/:id</td>
      <td>Displays a form for editing an menu</td>
    </tr>
    <tr>
      <td>DeleteMenuComponent</td>
      <td>app-delete-menu</td>
      <td>http:/localhost:4200/delete-menu/:id</td>
      <td>Responds to a button click to delete an menu</td>
    </tr>
    <tr>
      <td>SearchMenuComponent</td>
      <td>app-search-menu</td>
      <td>http:/localhost:4200/search-menu</td>
      <td>Displays a form for searching for an menu by menu theme</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>MenuItem Components</th>
    </tr>  
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ShowMenuItemsComponent</td>
      <td>app-show-menu-items</td>
      <td>http:/localhost:4200/menus</td>
      <td>Displays the list of menus</td>
    </tr>
    <tr>
      <td>NewMenuItemComponent</td>
      <td>app-new-menu-item</td>
      <td>http:/localhost:4200/new-menu</td>
      <td>Displays a form for adding a new menu</td>
    </tr>
    <tr>
      <td>EditMenuItemComponent</td>
      <td>app-edit-menu-item</td>
      <td>http:/localhost:4200/edit-menu/:id</td>
      <td>Displays a form for editing an menu</td>
    </tr>
    <tr>
      <td>DeleteMenuItemComponent</td>
      <td>app-delete-menu-item</td>
      <td>http:/localhost:4200/delete-menu/:id</td>
      <td>Responds to a button click to delete an menu</td>
    </tr>
    <tr>
      <td>SearchMenuItemComponent</td>
      <td>app-search-menu-item</td>
      <td>http:/localhost:4200/search-menu</td>
      <td>Displays a form for searching for an menu by menu item description</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>MenuItemIngredient Components</th>
    </tr>  
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ShowMenuItemIngredientsComponent</td>
      <td>app-show-menu-item-ingredients</td>
      <td>http:/localhost:4200/menus</td>
      <td>Displays the list of menus</td>
    </tr>
    <tr>
      <td>NewMenuItemIngredientComponent</td>
      <td>app-new-menu-item-ingredient</td>
      <td>http:/localhost:4200/new-menu</td>
      <td>Displays a form for adding a new menu</td>
    </tr>
    <tr>
      <td>EditMenuItemIngredientComponent</td>
      <td>app-edit-menu-item-ingredient</td>
      <td>http:/localhost:4200/edit-menu/:id</td>
      <td>Displays a form for editing an menu</td>
    </tr>
    <tr>
      <td>DeleteMenuItemIngredientComponent</td>
      <td>app-delete-menu-item-ingredient</td>
      <td>http:/localhost:4200/delete-menu/:id</td>
      <td>Responds to a button click to delete an menu</td>
    </tr>
    <tr>
      <td>SearchMenuItemIngredientComponent</td>
      <td>app-search-menu-item-ingredient</td>
      <td>http:/localhost:4200/search-menu</td>
      <td>Displays a form for searching for an menu by ingredient description</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Task Components</th>
    </tr>  
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ShowTasksComponent</td>
      <td>app-show-tasks</td>
      <td>http:/localhost:4200/menus</td>
      <td>Displays the list of menus</td>
    </tr>
    <tr>
      <td>NewTaskComponent</td>
      <td>app-new-task</td>
      <td>http:/localhost:4200/new-menu</td>
      <td>Displays a form for adding a new menu</td>
    </tr>
    <tr>
      <td>EditTaskComponent</td>
      <td>app-edit-task</td>
      <td>http:/localhost:4200/edit-menu/:id</td>
      <td>Displays a form for editing an menu</td>
    </tr>
    <tr>
      <td>DeleteTaskComponent</td>
      <td>app-delete-task</td>
      <td>http:/localhost:4200/delete-menu/:id</td>
      <td>Responds to a button click to delete an menu</td>
    </tr>
    <tr>
      <td>SearchTaskComponent</td>
      <td>app-search-task</td>
      <td>http:/localhost:4200/search-menu</td>
      <td>Displays a form for searching for an menu by task description</td>
    </tr>
  </table>
  <table>
  <tr>
    <th>Store Components</th>
  </tr>  
  <tr>
    <th>Component</th>
    <th>Selector</th>
    <th>Route URL</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ShowStoresComponent</td>
    <td>app-show-stores</td>
    <td>http:/localhost:4200/menus</td>
    <td>Displays the list of menus</td>
  </tr>
  <tr>
    <td>NewStoreComponent</td>
    <td>app-new-store</td>
    <td>http:/localhost:4200/new-menu</td>
    <td>Displays a form for adding a new menu</td>
  </tr>
  <tr>
    <td>EditStoreComponent</td>
    <td>app-edit-store</td>
    <td>http:/localhost:4200/edit-menu/:id</td>
    <td>Displays a form for editing an menu</td>
  </tr>
  <tr>
    <td>DeleteStoreComponent</td>
    <td>app-delete-store</td>
    <td>http:/localhost:4200/delete-menu/:id</td>
    <td>Responds to a button click to delete an menu</td>
  </tr>
  <tr>
    <td>SearchStoreComponent</td>
    <td>app-search-store</td>
    <td>http:/localhost:4200/search-menu</td>
    <td>Displays a form for searching for an menu by task description</td>
  </tr>
  </table>
  <table>
    <tr>
      <th>Invitee Components</th>
    </tr>  
    <tr>
      <th>Component</th>
      <th>Selector</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ShowInviteesComponent</td>
      <td>app-show-invitees</td>
      <td>http:/localhost:4200/menus</td>
      <td>Displays the list of menus</td>
    </tr>
    <tr>
      <td>NewInviteeComponent</td>
      <td>app-new-invitee</td>
      <td>http:/localhost:4200/new-menu</td>
      <td>Displays a form for adding a new menu</td>
    </tr>
    <tr>
      <td>EditInviteeComponent</td>
      <td>app-edit-invitee</td>
      <td>http:/localhost:4200/edit-menu/:id</td>
      <td>Displays a form for editing an menu</td>
    </tr>
    <tr>
      <td>DeleteInviteeComponent</td>
      <td>app-delete-invitee</td>
      <td>http:/localhost:4200/delete-menu/:id</td>
      <td>Responds to a button click to delete an menu</td>
    </tr>
    <tr>
      <td>SearchInviteeComponent</td>
      <td>app-search-invitee</td>
      <td>http:/localhost:4200/search-menu</td>
      <td>Displays a form for searching for an menu by task description</td>
    </tr>
  </table>
</details>

## Setup and Use

#### Required Packages
<details>
<summary>Click Here for Required Packages</summary>
<ul>
<li>@angular/animations 5.2.0</li>
<li>@angular/common 5.2.0</li>
<li>@angular/compiler 5.2.0</li>
<li>@angular/cli 1.6.5</li>
<li>@angular/core 5.2.0</li>
<li>@angular/forms 5.2.0</li>
<li>@angular/http 5.2.0</li>
<li>@angular/language-service 5.2.0</li>
<li>@angular/platform-browser 5.2.0</li>
<li>@angular/platform-browser-dynamic 5.2.0</li>
<li>@angular/router 5.2.0</li>
<li>angularfire2 4.0.0-rc.0</li>
<li>bootstrap 4.3.1</li>
<li>core-js 2.4.1</li>
<li>firebase 3.9.0</li>
<li>codelyzer 4.0.1</li>
<li>jasmine-core 2.8.0</li>
<li>jasmine-spec-reporter 4.2.1</li>
<li>karma 2.0.0</li>
<li>karma-chrome-launcher 2.2.0</li>
<li>karma-coverage-istanbul-reporter 1.2.1</li>
<li>karma-jasmine 1.1.0</li>
<li>karma-jasmine-html-reporter 0.2.2</li>
<li>protractor 5.1.2</li>
<li>rxjs 5.5.6</li>
<li>ts-node 4.1.0</li>
<li>tslint 5.9.1</li>
<li>@types/jasmine 2.8.3</li>
<li>@types/jasminewd2 2.0.2</li>
<li>@types/node 6.0.60</li>
<li>typescript 2.5.3</li>
<li>zone.js 0.8.19</li>
</ul>
</details>

#### Download the Repository
1. Clone [this repository](https://github.com/MarkStrickland562/AngularEventPlanner):

       $ git clone https://github.com/MarkStrickland562/AngularEventPlanner.git

#### Setup Firebase Key

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd AngularEventPlanner
2. Install the required packages:

       $ npm install
3. Build the application:

       $ ng build
4. Run the application:

       $ ng serve

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ ng test

## Built With

* Windows 10.1
* iMac OS X El Capitan 10.11.6
* Atom (IDE)

## Support and contact details

If you have any feedback or concerns, please contact Mark Strickland.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 [Mark Strickland](https://github.com/MarkStrickland562). All Rights Reserved.
```
MIT License

Copyright (c) 2019 Mark Strickland

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
