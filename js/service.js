const service = {
    ptv: {
        base: 'http://timetableapi.ptv.vic.gov.au',
        getNearestStops: (lat, lon) => {
            const req = `/v3/stops/location/${lat},${lon}?devid=${ak.ptv.devid}`;
            const sig = helper.encrypt(req, ak.ptv.ak);
            const url = service.ptv.base + req + '&signature=' + sig;
            return new Promise((res, rej) => {
                fetch(url).then(response => {
                    response.json().then(data => {
                        res(data);
                    });
                });
            });
        }
    }
};