import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'trainingday-tracker';

  private trainingDays: Training[] = [
    {day: "sunnudagur", trainingToday: false},
    {day: "mánudagur", trainingToday: true},
    {day: "þriðjudagur", trainingToday: false},
    {day: "miðvikudagur", trainingToday: true},
    {day: "fimmtudagur", trainingToday: false},
    {day: "föstudagur", trainingToday: true},
    {day: "laugardagur", trainingToday: true}]

    currentTrainingDay: Training


  ngOnInit() {

    const d = new Date();
    let currentDay = this.trainingDays[d.getDay()];

    this.currentTrainingDay = currentDay
  }
}


export class Training {
  day: string;
  trainingToday: boolean;
}
