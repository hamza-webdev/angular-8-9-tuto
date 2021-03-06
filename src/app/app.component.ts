import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'chapati-3', viewValue: 'Chapati'},
    {value: 'chicken-5', viewValue: 'Chicken'},
  ];
  food = 'chapati-3';
  myvalue = 2;
  isCheched = false;

  onChange($event) {
    console.log($event);
  }

  title = 'angular-scratch by hb';
  courses = ['course1', 'course2', 'course3'];
  viewMode = 'map';
  coursesObj = [
    {id: 0, name: 'cours typescript'},
    {id: 1, name: 'cours angular 9'},
    {id: 2, name: 'cours Rest api'},
    ];
  onAdd(){
   return this.coursesObj.push({id: this.coursesObj.length, name: 'course php'});
  }

  onRemove(id) {

    return this.coursesObj.splice(id, 1);
  }

  email = 'me@example.com'
  onKeyUp() {
    console.log(this.email);
  }

}









