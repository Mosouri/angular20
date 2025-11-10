import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [
    NgClass,
    NgStyle,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    DatePipe,
  ],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  div1ClassName = signal<string>('');

  firstName: string = 'Mohammad';
  courseName: string = 'Angular 20 Tutorial';

  rollNoList = [11, 12, 13, 14, 15, 16];

  studentObj: any = {
    name: 'Mohammad',
    city: 'Amman',
    state: 'Swelih',
  };

  currentDate: Date = new Date();

  isDiv2Green: boolean = false;

  constructor() {
    console.log('constructur');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //to trigger api calls
    //to subscribe
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    //to deal with viewChild
    //subscribe
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    //unsubscribe
    //restrict user from navigating
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}
