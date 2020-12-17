import { Component, OnInit,NgZone } from '@angular/core';
declare const $: any;
declare const window: any;
import * as c3 from 'c3';

@Component({
  selector: 'ngx-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    var self=this;
   var pheightt;
   var widhth2;

   this.zone.run(() => {
     $('.grid-stack').on('change', function(event, items) {
         
       if(items!=null)
        {
       var widthhh=items[0].el.css("width");
        var heightt=items[0].el.css("height");
       
        pheightt=parseInt(heightt, 10);
        widhth2=parseInt(widthhh, 10);

        self.availability_graph(pheightt,widhth2)

        window.FB=pheightt;
        }
        //console.log('phe::',window.FB)
        
     }​​​​);
    });
    

    this.availability_graph(120,120)
    
  }

  availability_graph(heightt,widhth2){
    
      c3.generate({
        size: {
            height: heightt,
            width: widhth2
        },
               bindto: '#avgraph',
      data: {
          columns: [
              ['data', 91.4]
          ],
          type: 'gauge',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      gauge: {
  //        label: {
  //            format: function(value, ratio) {
  //                return value;
  //            },
  //            show: false // to turn off the min/max labels.
  //        },
  //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
  //    max: 100, // 100 is default
  //    units: ' %',
  //    width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      }
      
  });
  
  }

}
