const helper = {
    getSel: () => {
        return {
            btnGetGPS: $('.get-gps'),
            loaderGetGPS: $('.loader-get-gps')
        };
    },
    getGPS: (ele) => {
        helper.hideEle(ele.btn);
        helper.dispEle(ele.loader);
    },
    dispEle: (ele) => {
        ele.removeClass('d-none');
    },
    hideEle: (ele) => {
        ele.addClass('d-none');
    },
    positionCallback: (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
    },
    encrypt: (req, ak) => {
        const shaObj = new jsSHA("SHA-1", "TEXT", {
            hmacKey: { value: ak, format: "TEXT" },
        });
        shaObj.update(req);
        return shaObj.getHash("HEX");
    },
    getStopName: (stop) => {
        let name = '';
        const len = stop.stop_name.split(' ').length;
        const sn = stop.stop_name.toLowerCase();

        switch(stop.route_type) {
            case 0:
                // Train
                name = sn + ' Station';
                break;
            case 1:
                // Tram
                if (len > 5) {
                    name = sn.split('/')[0];
                } else {
                    name = sn.replace('/', ' x ').split(' #')[0];
                }
                break;
            case 2:
                // Bus
                if (len > 4) {
                    name = sn.split('/')[0];
                } else {
                    name = sn.replace('/', ' x ');
                }
                break;
            default:
                name = sn;
        }
        name = helper.capitalize(name, ' ');
        name = name.replace('X', 'x');
        return name;
    },
    capitalize: (str, d) => {
        let strL = str.toLowerCase().split(d);
        const len = strL.length;
        let strC = [];
        for (let i = 0; i < len; i++) {
            if (strL[i].charAt(0)) {
                strC.push(strL[i].charAt(0).toUpperCase() + strL[i].slice(1));
            }
        }
        return strC.join(' ');
    }
};