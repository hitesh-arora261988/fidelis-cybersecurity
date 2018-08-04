import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alerts } from '../alert.model'; 
import { AlertService } from '../alert.services';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
alert: Alerts;
id: number;	

  constructor(private route: ActivatedRoute, private router: Router, private alertService: AlertService, ) {
  }

  ngOnInit() {
  	this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.alert= this.alertService.getAlert(this.id);
        }
      );
  }

  onAlertDetail(index:number){
     this.router.navigate(['/alerts', this.id], {relativeTo: this.route});
  }

}
