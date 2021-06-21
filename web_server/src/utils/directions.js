const request = require('request')

const directions = (startLocation, destination, callback) => {
    const url = 'http://www.mapquestapi.com/directions/v2/route?key=losamGpjpG7YgAVSBK8vnX6l0kFWLAmD&from=' + encodeURIComponent(startLocation) +'&to=' + encodeURIComponent(destination)

    request({ url:url, json:true }, (err, resp) => {
        if(err){
            callback("Unable to connect to server.")
        } else if(resp.body.route.routeError.errorCode === 211){
            callback("You must provide two valid addresses. Please refresh and try again.")
        } else if(resp.body.route.routeError.errorCode === 2){
            callback("You must provide two valid addresses. Please refresh and try again.")
        } else if(resp.body.route.routeError.errorCode === 0){
            console.log("You must provide two valid addresses. Please refresh and try again.")
        } else{
            const directions = resp.body.route.legs[0].maneuvers.map(x => x.narrative)
            callback(undefined, {
                directions: directions
            })
        }      
    })
}



module.exports = directions 
