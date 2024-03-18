import { WeatherDatas } from 'src/app/module/interfaces/weatherDatas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{

  @Input() weatherDatasInput!: WeatherDatas;

  ngOnInit(): void {
    console.log("Dados recebidos do componente pai",
    this.weatherDatasInput

    );


  }

}
