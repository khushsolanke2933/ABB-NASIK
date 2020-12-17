import { Component, NgZone, OnInit } from '@angular/core';
declare const $: any;
declare const window: any;

@Component({
  selector: 'ngx-plannedactual',
  templateUrl: './plannedactual.component.html',
  styleUrls: ['./plannedactual.component.scss']
})
export class PlannedactualComponent implements OnInit {

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

          self.planned_actual_table(pheightt, widhth2)
          window.FB = pheightt;
        }


      });
    });
    this.planned_actual_table(600, 530)
  }
  planned_actual_table(heightt, widhth2) {
    var container8 = document.getElementById('container8');
  }

}
