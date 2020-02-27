'use strict';
module.exports = {

    MapboxClient: require("mapbox"),

    signUp: function (req, res) {
        //res.send('User signed up!');
        console.log("------------------------------");
        console.log(req.query);
        console.log("------------------------------");
        //console.log(this);
        this.getDistrictAndUnit(req.query.address);
        res.send("User is from x district and y business unit");
        // check for the district and business unit here
    },

    getDistrictAndUnit: function (address) {
        //let address = req.query.address;
        console.log(address);
        let client = new this.MapboxClient("pk.eyJ1IjoiYW1leS1iaGF0a2FyIiwiYSI6ImNrNzR5d2MxNDA0ajUzcnFqMnd3OWo5c2gifQ.UMoWbmRQne57u8QFsOQAlQ");
        client.geocodeForward('7 rue de normandie, 92600, asnieres, france')
            .then(function(res) {
                //console.log(res);
                console.log("------------------------------");
                // res is the http response, including: status, headers and entity properties
                let data = res.entity; // data is the geocoding result as parsed JSON
                let location = {relevance: 0};
                if(res.entity.hasOwnProperty("features")) {
                    for(let i = 0; i < res.entity.features.length; i++) {
                        let loc = res.entity.features[i];
                        if(loc.relevance > location.relevance) {
                            location = loc;
                        }
                    }
                }
                console.log(location);
                console.log("------------------------------");
            })
            .catch(function(err) {
                // handle errors
            });
    }
};