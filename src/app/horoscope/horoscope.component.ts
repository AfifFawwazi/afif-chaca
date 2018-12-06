import { Component, OnInit, Output } from '@angular/core';
import { Horoscope } from './horoscope.model';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})
export class HoroscopeComponent implements OnInit {

  horoscope:Horoscope[]=[
  new Horoscope('A Test Recipe','This is simply a test',
  '../src/app/img/gemini.jpg'),
  new Horoscope('A Test Recipe two','This is simply a test','../src/app/img/nasgor.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
