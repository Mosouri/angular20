import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisiable: boolean = false;

  startMonthName: string = 'feb';

  cityList: string[] = ['Pune', 'Mumbai', 'Pamji', 'Nagpur'];

  studentList: any[] = [
    {
      name: 'Mohammad',
      city: 'Pune',
      isActive: false,
    },
    {
      name: 'Ali',
      city: 'Mumbai',
      isActive: false,
    },
    {
      name: 'Samer',
      city: 'Amman',
      isActive: true,
    },
    {
      name: 'Hisham',
      city: 'Nagpur',
      isActive: false,
    },
  ];

  showP() {
    this.isParaVisiable = true;
  }
  hideP() {
    this.isParaVisiable = false;
  }
}
