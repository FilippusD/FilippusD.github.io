import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
	

	// private trainingDays: Training[] = [
	//   {day: "sunnudagur", trainingToday: false},
	//   {day: "mánudagur", trainingToday: true},
	//   {day: "þriðjudagur", trainingToday: false},
	//   {day: "miðvikudagur", trainingToday: true},
	//   {day: "fimmtudagur", trainingToday: false},
	//   {day: "föstudagur", trainingToday: true},
	//   {day: "laugardagur", trainingToday: true}]

	//   currentTrainingDay: Training


	// ngOnInit() {

	//   const d = new Date();
	//   let currentDay = this.trainingDays[d.getDay()];

	//   this.currentTrainingDay = currentDay
	// }


	//hrikalegur block
	weight: number
	hrikalegur: boolean

	submitClicked:boolean = false

	ngOnInit(): void {

	}

	calculate() {
		this.submitClicked = true
		if(this.weight > 105) {
			this.hrikalegur = true
		} else {
			this.hrikalegur = false
		}
	}


}







export class Training {
	day: string;
	trainingToday: boolean;
}
