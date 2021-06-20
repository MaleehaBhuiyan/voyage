const request = require('request')

const incidents = (lat1, lng1, lat2, lng2, callback) => {

    const url = 'http://www.mapquestapi.com/traffic/v2/incidents?key=losamGpjpG7YgAVSBK8vnX6l0kFWLAmD&boundingBox=' + encodeURIComponent(lat1) + ',' +  encodeURIComponent(lng1) + ',' +  encodeURIComponent(lat2) + ',' + encodeURIComponent(lng2) + '&filters=construction,incidents'

    request({ url:url, json:true }, (err, res) => {

        if(err){
            callback("Unable to connect to server.")
        } else if(!res.body){
            callback("Please enter 2 valid locations.")
        } else{
            const incidentDesc = res.body.incidents.map(incident => incident.fullDesc)
            callback(undefined, {
                incidents: incidentDesc,
                trafficImg: 'https://www.mapquestapi.com/traffic/v2/flow?key=losamGpjpG7YgAVSBK8vnX6l0kFWLAmD&mapLat=' + encodeURIComponent(lat1) + '&mapLng=' + encodeURIComponent(lng1) + '&mapHeight=400&mapWidth=400&mapScale=108335'
            })
        }      
    })
}

// incidents(39.95,-105.25,39.52,-104.71, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = incidents 



