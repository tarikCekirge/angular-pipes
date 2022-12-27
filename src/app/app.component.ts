import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: any = '';
  date: any = '';
  amount: number = 0;
  height: number = 0;
  mile: number = 0
  lessons = {
    name: 'Math',
    subject: 'Numbers',
    currentPoint: '80'
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: number) {
    this.mile = value
  }
}
