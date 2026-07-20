import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MotorInsurance } from './Component/motor-insurance/motor-insurance';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MotorInsurance],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ICICI');
}
