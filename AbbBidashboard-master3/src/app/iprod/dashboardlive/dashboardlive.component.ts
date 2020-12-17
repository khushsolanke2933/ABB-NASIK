import { Component, ViewChild, ElementRef, AfterViewChecked, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Widget } from './dashboard.model';
import { OeemodalComponent } from '../oee/oeemodal/oeemodal.component';
import { OEE } from '../oee/oee.model';
import {
  NbDialogService, NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition,
  NbDialogRef
} from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { FpymodalComponent } from '../fpy/fpymodal/fpymodal.component';

declare const $: any;

@Component({
  selector: 'ngx-dashboardlive',
  templateUrl: './dashboardlive.component.html',
  providers: [DashboardService]
})
export class DashboardliveComponent implements AfterViewChecked, OnDestroy, OnInit {


  ngOnInit() {
    //console.log('xyz1');
    // $('.grid-stack').on('change', function(event, items) {​​​​console.log('xyz2',items[0].el.css("width"),'xyz2',items[0].el.css("height"));}​​​​);


  }

  @ViewChild('gridStackContainer', { static: false })
  public gridStackContainer: ElementRef;

  public widgets: Widget[];

  constructor(private httpClient: HttpClient, private toastrService: NbToastrService, private dialogService: NbDialogService, private service: DashboardService) {

    this.loadWidgets();
  }
  // constructor(
  //   private service: DashboardService) {
  //   this.loadWidgets();
  // }


  ngAfterViewChecked() {
    if (this.widgets) {
      $(this.gridStackContainer.nativeElement).gridstack();
    }
  }

  public loadWidgets() {
    this.service.getWidgets()
      .subscribe(arg => {
        this.widgets = arg;
        this.destroyGrid();
      });
  }

  private destroyGrid() {
    const grid = $(this.gridStackContainer.nativeElement).data('gridstack');
    if (grid) {
      grid.destroy(false);
    }
  }

  ngOnDestroy() {
    this.destroyGrid();
  }

  addOee() {
    this.dialogService.open(OeemodalComponent, {}).onClose.subscribe((oee: OEE) => {
      console.log('register user called');
      // if (Object.getOwnPropertyNames(oee).length > 3)
      //   if (oee == null) return;

    });
  }

  addFpy() {
    this.dialogService.open(FpymodalComponent, {}).onClose.subscribe((oee: OEE) => {
      console.log('register user called');

    });
  }




}
