import { Component, OnInit, NgZone } from '@angular/core';
declare const $: any;
declare const window: any;
import { dynamicSer } from '../services/oee.service'
import * as c3 from 'c3';

declare global {
    interface window {
        FB: any;
    }
}
@Component({
    selector: 'app-oee',
    templateUrl: './oee.component.html',
    styleUrls: ['./oee.component.scss'],
    providers: [dynamicSer]
})


export class OeeComponent implements OnInit {
    text: any;

    constructor(private _dynamicSer: dynamicSer, private zone: NgZone) {

    }




    ngOnInit(): void {
        this.text = this._dynamicSer.getHeightData;
        console.log('text', this.text);
        var self = this;
        var pheightt;
        var widhth2;

        this.zone.run(() => {
            $('.grid-stack').on('change', function (event, items) {

                // ​​​​console.log('xyz2',items[0].el.css("width"),'xyz2',items[0].el.css("height"));
                if (items != null) {
                    var widthhh = items[0].el.css("width");
                    var heightt = items[0].el.css("height");

                    pheightt = parseInt(heightt, 10);
                    widhth2 = parseInt(widthhh, 10);

                    self.oee_graph(pheightt, widhth2)

                    window.FB = pheightt;
                }
                //console.log('phe::',window.FB)

            });
        });


        this.oee_graph(170, 170)

    }

    oee_graph(heightt, widhth2) {
        var chart = c3.generate({
            size: {
                height: 190,
                width: 190
            },
            bindto: '#container',
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
                title: "OEE"
            }
        });


        var chart2 = c3.generate({
            size: {
                height: 160,
                width: 160
            },
            bindto: '#bodyfat',
            data: {
                columns: [
                    ['data1', 20],
                    ['data2', 130],
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
                title: "Availability"
            }
        });

        var chart3 = c3.generate({
            size: {
                height: 160,
                width: 160
            },
            bindto: '#avgraph',
            data: {
                columns: [
                    ['data1', 50],
                    ['data2', 100],
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
                title: "Performance"
            }
        });

        var chart4 = c3.generate({
            size: {
                height: 160,
                width: 160
            },
            bindto: '#qualityGraph',
            data: {
                columns: [
                    ['data1', 70],
                    ['data2', 80],
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
                title: "Quality"
            }
        });

    }

}
