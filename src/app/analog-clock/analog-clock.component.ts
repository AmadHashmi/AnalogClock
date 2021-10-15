import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
})
export class AnalogClockComponent implements OnInit, AfterViewInit {
  @ViewChild('hrHand', { static: false }) hrHand!: ElementRef;
  @ViewChild('minHand', { static: false }) minHand!: ElementRef;
  @ViewChild('secHand', { static: false }) secHand!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let secPosition = (sec / 60) * 360 + 90;
    let minPosition = (min / 60) * 360 + 90;
    let hrPosition = (hr / 60) * 360 + 90;

    this.secHand.nativeElement.style.transform =
      'rotate(' + secPosition + 'deg)';

    this.minHand.nativeElement.style.transform =
      'rotate(' + minPosition + 'deg)';

    this.hrHand.nativeElement.style.transform = 'rotate(' + hrPosition + 'deg)';
  }
}
