## **Mark Strickland**

[<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562)

[**MarkStrickland562**](https://github.com/MarkStrickland562)

## **eHappenings Event Planner (Angular)**

###### Created April 5th, 2019.

----------

## Description
This project is a re-development of a C#-based team project from the Epicodus C# class called *eHappenings*. The C# code has been converted to javascript and Angular
and the C# Model/View/Controller structure has been converted to the Angular Model/View/Component structure.
Much of the styling has been kept from the C# project and credit for the styling goes to Clara Munro and Micaela Jawor.

## Known Bugs

* No known bugs.

## Project Plan

#### Part One (Week #1)
* Develop technical architecture.
* Set up the project.
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
</details>
* Create model classes for the data.
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
    <td>src/models/event.ts</td>
    <td>export class Event {<br>constructor (public eventId: number,<br>public eventName: string) {}<br>}</td>
  </tr>    
  <tr>
    <td>Menu</td>
    <td>src/models/menu.ts</td>
    <td>export class Menu {<br>constructor (menuId: number,<br>menuTheme: string){}<br>}</td>
  </tr>    
  <tr>
    <td>MenuItem</td>
    <td>src/models/menuItem.ts</td>
    <td>export class MenuItem {<br>constructor(public menuItemId: number,<br>public menuItemDescription: string) {}<br>}</td>
  </tr>
  <tr>
    <td>MenuItemIngredient</td>
    <td>src/models/menuItemIngredient.ts</td>
    <td>export class MenuItemIngredient {<br>constructor(public menuItemIngredientId: number,<br>public ingredientDescription: string,<br>public menuItemsId: number,<br>public storeId: number) {}<br>}</td>
  </tr>
  <tr>
    <td>Task</td>
    <td>src/models/task.ts</td>
    <td>export class Task {<br>constructor(public taskId: number,<br>public taskDescription: string,<br>public taskPlannedStartDateTime: Date = new Date()) {}<br>}</td>
  </tr>
  <tr>
    <td>Invitee</td>
    <td>src/models/invitee.ts</td>
    <td>export class Invitee {<br>constructor(public inviteeId: number,<br>
              public inviteeName: string,<br>public inviteeEmailAddress: string) {}<br>}</td>
  </tr>
</table>
</details>
* Create scripts to add mock data.
<details>
<summary>Click Here for Details</summary>
<table>
  <tr>
    <th>Script Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>src/app/mock-data/event-data.ts</td>
    <td>Data for the Event class</td>
  </tr>
  <tr>
    <td>src/app/mock-data/menu-data.ts</td>
    <td>Data for the Menu class</td>
  </tr>
  <tr>
    <td>src/app/mock-data/menuItem-data.ts</td>
    <td>Data for the MenuItem class</td>
  </tr>
  <tr>
    <td>src/app/mock-data/menuItemIngredient-data.ts</td>
    <td>Data for the MenuItemIngredient class</td>
  </tr>
  <tr>
    <td>src/app/mock-data/task-data.ts</td>
    <td>Data for the Task class</td>
  </tr>
  <tr>
    <td>src/app/mock-data/store-data.ts</td>
    <td>Data for the Store class</td>
  </tr>
  <tr>
    <td>src/app/mock-data/invitee-data.ts</td>
    <td>Data for the Invitee class</td>
  </tr>
</table>
</details>
* Create components for showing, adding, editing, deleting and searching for model-related objects.
<details>
<summary>Click Here for Details</summary>
1) Create the About and Main child components by executing the following command at the bash prompt:
  $ ng generate component main
  $ ng generate component about
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
</details>
* Create views for showing, adding, editing, deleting and searching for model-related objects.
* Add routes for the components.

#### Part Two (Week #2)
* Move the data to a database.
* Add services and dependency-injection for accessing the database.
* Add deployment to Firebase.
* Add an API call.
* Add user authentication
* Add route guards

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
      <td>eventId<br>eventName<br>eventLocation<br>menusId</td>
      <td>number<br>string<br>string<br>number</td>
    </tr>    
    <tr>
      <td>Menu</td>
      <td>menuId<br>menuTheme</td>
      <td>number<br>string</td>
    </tr>   
    <tr>
      <td>Task</td>
      <td>taskId<br>taskDescription<br>taskPlannedStartDateTime</td>
      <td>number<br>string<br>Date</td>
    </tr>
    <tr>
      <td>Menu Item</td>
      <td>menuItemId<br>menuItemDescription</td>
      <td>number<br>string</td>
    </tr>
    <tr>
      <td>Menu Item Ingredient</td>
      <td>menuItemIngredientId<br>ingredientDescription<br>menuItemsId<br>storeId</td>
      <td>number<br>string<br>number<br>number</td>
    </tr>
    <tr>
      <td>Store</td>
      <td>storeId<br>storeName</td>
      <td>number<br>string</td>
    </tr>
    <tr>
      <td>Invitee</td>
      <td>inviteeId<br>inviteeName<br>inviteeEmailAddress</td>
      <td>number<br>string<br>string</td>
    </tr>
  </table>
</details>

<details>
  <summary>Click Here for an Overview of the Components and Routes</summary>

  <table>
    <tr>
      <th>Component</th>
      <th>Router Link</th>
      <th>Route URL</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Root Component</td>
      <td>N/A</td>
      <td>http:/localhost:4200/</td>
      <td>Displays the Welcome page</td>
    </tr>
    <tr>
      <td>AboutComponent</td>
      <td>about-page</td>
      <td>http:/localhost:4200/about</td>
      <td>Displays the About page</td>
    </tr>
      <td>ShowEventsComponent</td>
      <td>show-events-page</td>
      <td>http:/localhost:4200/events</td>
      <td>Displays the list of events</td>
    </tr>
    <tr>
      <td>NewEventComponent</td>
      <td>new-event-page</td>
      <td>http:/localhost:4200/newevent</td>
      <td>Displays a form for adding a new event</td>
    </tr>
    <tr>
      <td>EditEventComponent</td>
      <td>edit-event-page</td>
      <td>http:/localhost:4200/editevent/:id</td>
      <td>Displays a form for editing an event</td>
    </tr>
    <tr>
      <td>DeleteEventComponent</td>
      <td>delete-event-page</td>
      <td>http:/localhost:4200/deleteevent/:id</td>
      <td>Responds to a button click to delete an event</td>
    </tr>
    <tr>
      <td>SearchEventComponent</td>
      <td>search-event-page</tdß>
      <td>http:/localhost:4200/searchevent</td>
      <td>Displays a form for searching for an event</td>
    </tr>
  </table>

</details>

## Setup and Use

#### Prerequisites
* bootstrap 4.3.1
* jquery 3.2.1
* popper.js 1.14.7
* babel-core 6.26.0
* babel-loader 7.1.3
* babel-preset-es2015 6.24.1
* clean-webpack-plugin 0.1.18
* css-loader 0.28.10
* dotenv-webpack 1.7.0
* eslint 4.18.2
* eslint-loader 2.0.0
* file-loader 3.0.1
* html-webpack-plugin 3.0.6
* jasmine 3.1.0
* jasmine-core 2.99.1
* karma 2.0.0
* karma-chrome-launcher 2.2.0
* karma-cli 1.0.1
* karma-jasmine 1.1.1
* karma-jasmine-html-reporter 0.2.2
* karma-jquery 0.2.2
* karma-sourcemap-loader 0.3.7
* karma-webpack 2.0.13
* style-loader 0.20.2
* uglifyjs-webpack-plugin 1.2.2
* url-loader 1.1.2
* webpack 4.19.1
* webpack-cli 2.0.9
* webpack-dev-server 3.1.0


#### Download the Repository
1. Clone [this repository](https://github.com/MarkStrickland562/AngularEventPlanner):

       $ git clone https://github.com/MarkStrickland562/AngularEventPlanner.git

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