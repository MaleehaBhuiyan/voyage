console.log("Client side js loaded")

const locations = document.querySelector('form')
const inputOne = document.querySelector('#startPoint')
const inputTwo = document.querySelector('#destination')
const directionsDiv = document.querySelector('#directions')
const directionsList = document.querySelector('ol')

locations.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const startPoint = inputOne.value 
    const destination = inputTwo.value

    fetch('http://localhost:3000/directions?startLocation=' + startPoint +'&destination=' + destination).then((resp) => {
        resp.json().then((data) => {
        if(data.error){
            directionsDiv.innerHTML = data.error
        } else {
            
            // directionsH1.innerHTML = `Directions from ${data.startPoint} to ${data.destination}`
            // directionsH1.append(directionsH1)

            for(let counter = 1; counter < data.directions.length; counter++){
                directionsList.innerHTML += `${counter}. ${data.directions[counter]} <br />`
            }
            
        }
    })
})})
