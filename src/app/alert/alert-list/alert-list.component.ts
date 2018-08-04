import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { AlertService } from '../alert.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alerts } from '../alert.model';
@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit{
  public searchString: string;
  public alerts=[];
  page:number=1;
  itemsEachPage:number=10;
  constructor(private alertService: AlertService, private router: Router,  private route: ActivatedRoute, ) { }

  ngOnInit() {
   this.alertService.getAlerts()
        .subscribe(data => this.alerts =data);    
         this.alertService.allAlerts(this.alerts);         
  }

  onAlertDetail(index:number){
     this.router.navigate(['/alerts', index], {relativeTo: this.route})
     this.alertService.allAlerts(this.alerts);         
  }

  pageChangeEvent($event){
    this.page = $event
  }

}
