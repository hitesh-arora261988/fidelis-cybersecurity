import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alerts } from './alert.model';
import { Observable } from 'rxjs';

@Injectable()
export class AlertService {
  baseAPIUrl= 'http://localhost:4200/assets/alert.json';
  alerts:Alerts[];
  filters:Alerts[];
  public protocol=[];
  public protocolCount=[];

  constructor(private http: HttpClient) {}

  getAlerts(): Observable<Alerts[]> {
    return this.http.get<Alerts[]>(this.baseAPIUrl)
  }

  allAlerts(alerts:Alerts[]){
     this.alerts= alerts;
  }

  allFiltersAlerts(alerts:Alerts[]){
     this.filters= alerts;
     this.severrityFilter();
  }

   getAlert(index:number){
     for(var i=0; i<this.alerts.length;i++){
        if(this.alerts[i].AlertId===index){
          return this.alerts[i];
        }
     }
  }

  getFiltersData() :Observable<Alerts[]>{
     return this.http.get<Alerts[]>(this.baseAPIUrl);
  }
  severrityFilter(){
    this.protocolCount=[];
    for(var i=0;i<this.filters.length;i++){
    if(this.protocol.indexOf(this.filters[i].Protocol)<0){
      this.protocol.push(this.filters[i].Protocol)
    }
   }

   for(var i=0;i<this.protocol.length;i++){
      var count=0;
       for(var j=0;j<this.filters.length;j++){        
          if(this.filters[j].Protocol==this.protocol[i]){
              count=count+1;
           }
        }    
        this.protocolCount.push(count);
     }




  }

}
