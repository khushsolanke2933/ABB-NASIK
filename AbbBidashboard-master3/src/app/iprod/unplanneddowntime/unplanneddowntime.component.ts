import { Component, NgZone, OnInit } from '@angular/core';
declare const $: any;
declare const window: any;
import * as c3 from 'c3';

@Component({
  selector: 'app-unplanneddowntime',
  templateUrl: './unplanneddowntime.component.html',
  styleUrls: ['./unplanneddowntime.component.scss']
})
export class UnplanneddowntimeComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {

    var self = this;
    var pheightt;
    var widhth2;

    this.zone.run(() => {
      $('.grid-stack').on('change', function (event, items) {

        if (items != null) {
          var widthhh = items[0].el.css("width");
          var heightt = items[0].el.css("height");

          pheightt = parseInt(heightt, 10);
          widhth2 = parseInt(widthhh, 10);

          self.unplanned_downtime_graph(pheightt, widhth2)
          window.FB = pheightt;
        }

      });
    });
    this.unplanned_downtime_graph(200, 330)
  }

  unplanned_downtime_graph(heightt, widhth2) {

    var chart = c3.generate({
      size: {
        height: heightt,
        width: 330       //for dynamic width assign param var
      },
      bindto: '#container5',
      data: {
        columns: [
          ['data1', 30, 20, 10, 15, 25]

        ],
        type: 'bar',
        colors: {
          data1: '#5a5a5a',
        },
      },
      bar: {
        width: {
          ratio: 0.5
        }
      }
    });
  }

}
