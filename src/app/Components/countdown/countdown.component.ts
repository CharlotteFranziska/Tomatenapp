import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  daysUntilAussaat: number = 0;
  hoursUntilAussaat: number = 0;
  minutesUntilAussaat: number = 0;
  secondsUntilAussaat: number = 0;

  daysUntilEisheiligen: number = 0;
  hoursUntilEisheiligen: number = 0;
  minutesUntilEisheiligen: number = 0;
  secondsUntilEisheiligen: number = 0;

  private intervalId: any;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.calculateCountdown();
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.calculateCountdown();
        });
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private calculateCountdown(): void {
    const today = new Date();

    const aussaatDate = this.getNextDate(today, 2, 15); // 15. März (Monat ist 0-basiert!)
    const eisheiligenDate = this.getNextDate(today, 4, 15); // 15. Mai (Monat ist 0-basiert!)

    this.setCountdown(today, aussaatDate, 'Aussaat');
    this.setCountdown(today, eisheiligenDate, 'Eisheiligen');
  }

  private setCountdown(currentDate: Date, targetDate: Date, type: string): void {
    const timeDiff = targetDate.getTime() - currentDate.getTime();

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Negative Werte auf 0 setzen, falls das Datum in der Vergangenheit liegt
    days = days < 0 ? 0 : days;
    hours = hours < 0 ? 0 : hours;
    minutes = minutes < 0 ? 0 : minutes;
    seconds = seconds < 0 ? 0 : seconds;


    if (type === 'Aussaat') {
      this.daysUntilAussaat = days;
      this.hoursUntilAussaat = hours;
      this.minutesUntilAussaat = minutes;
      this.secondsUntilAussaat = seconds;
    } else if (type === 'Eisheiligen') {
      this.daysUntilEisheiligen = days;
      this.hoursUntilEisheiligen = hours;
      this.minutesUntilEisheiligen = minutes;
      this.secondsUntilEisheiligen = seconds;
    }
  }

  private getNextDate(currentDate: Date, month: number, day: number): Date {
    const targetDate = new Date(currentDate.getFullYear(), month, day);

    if (targetDate < currentDate) {
      targetDate.setFullYear(currentDate.getFullYear() + 1);
    }

    return targetDate;
  }
}