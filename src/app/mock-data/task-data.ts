import { Task } from './../models/task';

export tasks: Task[] = [
  new Task(1, 'Grill Meat', new Date(2019, 8, 4, 14, 30, 0)),
  new Task(2, 'Put Food Out', new Date(2019, 8, 4, 15, 0, 0)),
  new Task(3, 'Set Tables', new Date(2019, 5, 21, 08, 0, 0)),
  new Task(4, 'Make Quiches', new Date(2019, 5, 21, 09, 0, 0)),
  new Task(5, 'Put Cinnamon Rolls in Oven', new Date(2019, 5, 21, 9, 30, 0)),
  new Task(6, 'Bake Quiches', new Date(2019, 5, 21, 10, 0, 0)),
  new Task(7, 'Fry Bacon', new Date(2019, 5, 21, 10, 30, 0)),
  new Task(8, 'Make Bloody Marys', new Date(2019, 5, 21, 10, 45, 0)),
  new Task(9, 'Peel and Slice Potatoes', new Date(2019, 4, 17, 13, 0, 0)),
  new Task(10, 'Brine the Brisket', new Date(2019, 4, 17, 13, 30, 0)),
  new Task(11, 'Prepare Buffet Table', new Date(2019, 4, 17, 14, 0, 0)),
  new Task(12, 'Prepare Drink Table', new Date(2019, 4, 17, 15, 0, 0)),
  new Task(13, 'Put Corned Beef in Oven', new Date(2019, 4, 17, 16, 0, 0)),
  new Task(14, 'Put Scalloped Potatoes in Oven', new Date(2019, 4, 17, 16, 30, 0)),
  new Task(15, 'Put Brussels Sprouts in Oven', new Date(2019, 4, 17, 17, 0, 0)),
  new Task(16, 'Put Food Out', new Date(2019, 4, 17, 17, 30, 0))
];

console.log(tasks[0]);
