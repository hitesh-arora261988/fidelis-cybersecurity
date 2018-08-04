import { Component, OnInit, Input } from '@angular/core';
import { Alerts } from '../../alert.model';

@Component({
  selector: '.app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.css']
})
export class AlertItemComponent implements OnInit {

 @Input() alert: Alerts;
 @Input() index: number;


  constructor() {
  }

  ngOnInit() {
  }

}
