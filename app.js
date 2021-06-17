const directions = require('./utils/directions')


directions("East Elmhurst", "Central Park", (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})