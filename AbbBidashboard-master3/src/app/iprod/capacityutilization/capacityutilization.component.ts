import { Component, NgZone, OnInit } from '@angular/core';
declare const $: any;
declare const window: any;
import * as c3 from 'c3';

@Component({
  selector: 'app-capacityutilization',
  templateUrl: './capacityutilization.component.html',
  styleUrls: ['./capacityutilization.component.scss']
})
export class CapacityutilizationComponent implements OnInit {

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

          self.capacity_utilization_graph(pheightt, widhth2)
          window.FB = pheightt;
        }

      });
    });
    this.capacity_utilization_graph(200, 330)
  }

  capacity_utilization_graph(heightt, widhth2) {

    var chart = c3.generate({

      size: {
        height: heightt,
        width: widhth2
      },
      bindto: '#container4',
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120],
        ],
        type: 'donut',
        colors: {
          data1: '#ff000f',
          data2: '#5a5a5a',
        },
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: "Capacity Utilization"
      }
    });

  }

}
