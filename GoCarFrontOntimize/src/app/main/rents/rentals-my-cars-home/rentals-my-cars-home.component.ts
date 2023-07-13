import { Component, OnInit, ViewChild } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, DiscreteBarChartConfiguration, DataAdapterUtils, StackedAreaChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';


@Component({
  selector: 'app-rentals-my-cars-home',
  templateUrl: './rentals-my-cars-home.component.html',
  styleUrls: ['./rentals-my-cars-home.component.css']
})
export class RentalsMyCarsHomeComponent implements OnInit {

  @ViewChild('discretebar',{static:true})
   protected discretebar: OChartComponent;
  public chartParameters: DiscreteBarChartConfiguration;
  
  @ViewChild('stackedAreaChart',{static:true} )
  protected stackedAreaChart: OChartComponent;
  public chartParameters1: StackedAreaChartConfiguration;

  noTranslateData = [];
  constructor(private translateService: OTranslateService, private d3LocaleService:D3LocaleService) { }

  
  ngOnInit(): void {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureDiscreteBarChart(d3Locale);
    let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.discretebar.setDataArray(dataAdapter.adaptResult(this.noTranslateData));

    this._configureStackedAreaChart(d3Locale);
    let dataAdapter1 = DataAdapterUtils.createDataAdapter(this.chartParameters1);
    this.stackedAreaChart.setDataArray(dataAdapter.adaptResult(this.noTranslateData));
    
  }
  private _configureDiscreteBarChart(locale: any): void {
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "month_name";
    this.chartParameters.yAxis = ["total"];
    this.chartParameters.xDataType = d => locale.timeFormat('%b')(new Date(d));
  }

  private _configureStackedAreaChart(locale: any):void{
    this.chartParameters1 = new StackedAreaChartConfiguration();
    this.chartParameters1.xAxis = "";
    this.chartParameters1.yAxis = [];
    this.chartParameters1.xDataType = d => locale.timeFormat('%b')(new Date(d));
       
  }

  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
}
