import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AlertListComponent } from './alert/alert-list/alert-list.component';
import { AlertItemComponent } from './alert/alert-list/alert-item/alert-item.component';
import { HeaderComponent } from './header/header.component';
import { AlertService } from './alert/alert.services';
import { AlertDetailsComponent } from './alert/alert-details/alert-details.component';
import { FilterPipe } from './shared/filter.pipe';
import { AlertsFilterComponent } from './alert/alerts-filter/alerts-filter.component';

const appRoute: Routes = [
  { path:'', redirectTo: '/alerts', pathMatch: 'full' },
  { path:'alerts', component: AlertComponent, children:[
    {path: ':id', component: AlertDetailsComponent},
    ] 
    },
   { path:'**', redirectTo: '/alerts' }  
]

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AlertListComponent,
    AlertItemComponent,
    HeaderComponent,
    AlertDetailsComponent,
    FilterPipe,
    AlertsFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
