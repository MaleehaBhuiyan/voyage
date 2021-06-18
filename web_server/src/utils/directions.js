const request = require('request')

const directions = (startLocation, destination, callback) => {
    const url = 'http://www.mapquestapi.com/directions/v2/route?key=losamGpjpG7YgAVSBK8vnX6l0kFWLAmD&from=' + encodeURIComponent(startLocation) +'&to=' + encodeURIComponent(destination)

    console.log(url)

    request({ url:url, json:true }, (err, resp) => {
        if(err){
            callback("Unable to connect to server.")
        } else if(resp.body.route.routeError.errorCode === 211){
            callback(resp.body.info.messages[0])
        } else if(resp.body.route.routeError.errorCode === 2){
            callback(resp.body.info.messages[0])
        } else if(resp.body.route.routeError.errorCode === 0){
            console.log("Error processing route request.")
        } else{
            const directions = resp.body.route.legs[0].maneuvers.map(x => x.narrative)
            callback(undefined, {
                directions: directions
            })
        }      
    })
}

module.exports = directions 