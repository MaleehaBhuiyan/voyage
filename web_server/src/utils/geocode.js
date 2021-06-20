const request = require('request')

const geocode = (location, callback) => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=losamGpjpG7YgAVSBK8vnX6l0kFWLAmD&location=' + encodeURIComponent(location)

    request({ url:url, json:true }, (err, res) => {
        if(err){
            callback("Unable to connect to server.", undefined)
        } else if(!res.body){
            callback("Please provide a valid location.", undefined)
        } else {
            callback(undefined, {
                lat: res.body.results[0].locations[0].latLng.lat,
                lng: res.body.results[0].locations[0].latLng.lng
            })
        }
    })

}

// geocode('Washington,DC', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = geocode  