import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customerfeedback',
  templateUrl: './customerfeedback.component.html',
  styleUrls: ['./customerfeedback.component.scss']
})
export class CustomerfeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = [
    { value: 'This is value 1', label: 'Buggy' },
    { value: 'This is value 2', label: 'Fine' },
    { value: 'This is value 3', label: 'Great' },
    { value: 'This is value 4', label: 'Life Saving' },
  ];
  option;

  options1 = [
    { value: 'This is value 1', label: 'Badly' },
    { value: 'This is value 2', label: 'Fine' },
    { value: 'This is value 3', label: 'Well' },
    { value: 'This is value 4', label: 'Very well' },
  ];
  option1;

}
