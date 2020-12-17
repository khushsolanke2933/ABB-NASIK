declare const $: any;
export class dynamicSer{
   // public height :number 


    public getHeightData()
    {
        $('.grid-stack').on('change', function(event, items) {
            ​​​​console.log('xyz2',items[0].el.css("width"),'xyz2',items[0].el.css("height"));
            var heightt=items[0].el.css("height");
            var pheight=parseInt(heightt, 10);
            console.log('height::',pheight)
            return pheight;
        }​​​​);
    }
}