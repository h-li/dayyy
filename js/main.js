$(() => {
    
  
    // service.ptv.getNearestStops(-37.819026149043886, 145.1212318000527).then(res => {
    //     console.log(res);
    //     res.stops.forEach(s => {
    //         console.log(helper.getStopName(s));
    //     });
    // });


    

    // if (navigator.geolocation) {
    //     const cp = navigator.geolocation.getCurrentPosition(helper.positionCallback);
    // } else {
        
    // }

});

function getGPS() {
    const sel = helper.getSel();
    helper.getGPS({
        btn: sel.btnGetGPS,
        loader: sel.loaderGetGPS
    });
}
