import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.services'

@Component({
  selector: 'app-alerts-filter',
  templateUrl: './alerts-filter.component.html',
  styleUrls: ['./alerts-filter.component.css']
})
export class AlertsFilterComponent implements OnInit {
  public alerts=[];
  public protocols=[];
  public protocolCount =[];
  showFilter=false
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlerts()
       .subscribe(data => this.alerts =data);
        this.alertService.allAlerts(this.alerts); 
  }

  showFilters(){
  	this.alertService.allFiltersAlerts(this.alerts); 
  	this.protocols= this.alertService.protocol;
  	this.protocolCount= this.alertService.protocolCount;
    this.showFilter= !this.showFilter
  }
  	

}
