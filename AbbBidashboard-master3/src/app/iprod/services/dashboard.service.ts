import { Injectable, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Widget } from '../dashboardlive/dashboard.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DashboardService implements OnInit {

  @Input()
  id: string;
  ngOnInit() {
  }

  public getWidgets(): Observable<Widget[]> {
    const widgets = new Subject<Widget[]>();
    setTimeout(() => {
      widgets.next([
        { positionX: 0, positionY: 0, width: 6, height: 5, content: 'Overall Equipment Effectiveness', id: 'container' },
        { positionX: 4, positionY: 8, width: 4, height: 4, content: 'Current FPY', id: 'container2' },
        { positionX: 0, positionY: 10, width: 4, height: 4, content: 'Current Production', id: 'container3' },

        { positionX: 6, positionY: 0, width: 3, height: 5, content: 'Capacity Utilization', id: 'container4' },
        { positionX: 10, positionY: 12, width: 4, height: 4, content: 'Current Loss', id: 'container5' },
        // { positionX: 8, positionY: 4, width: 4, height: 6, content: 'PLANNED-DOWNTIME',id:'container6'  },
        { positionX: 9, positionY: 4, width: 3, height: 5, content: 'Planned Actual', id: 'container8' },

      ]);
    });

    return widgets;
  }
}