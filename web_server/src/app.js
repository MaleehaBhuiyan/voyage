const path = require('path')
const express = require('express')
const directions = require('./utils/directions')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/directions', (req, res) => {
    if(!req.query.startLocation || !req.query.destination){
        return res.send({
            error: 'You must provide two addresses.'
        })
    }

    directions(req.query.startLocation, req.query.destination, (error, { directions } = {}) => {
        if(error){
            return res.send({ error })
        }

        res.send({
            directions: directions,
            startLocation: req.query.startLocation,
            destination: req.query.destination
        })
    })

})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})