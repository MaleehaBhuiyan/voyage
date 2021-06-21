console.log("Client side js loaded")

const locations = document.querySelector('form')
const inputOne = document.querySelector('#startPoint')
const inputTwo = document.querySelector('#destination')
const directionsDiv = document.querySelector('#directions')
const directionsList = document.querySelector('ol')
var directionsHeader = document.querySelector('h5');

locations.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const startPoint = inputOne.value 
    const destination = inputTwo.value

    fetch('http://localhost:3000/directions?startLocation=' + startPoint +'&destination=' + destination).then((resp) => {
        resp.json().then((data) => {
        if(data.error){
            directionsDiv.innerHTML = 'You must provide two valid addresses. Please refresh and try again.'
        } else {

            directionsDiv.classList.add('directionsStyle')
            
            directionsHeader.innerHTML = `${data.startLocation} &#9679--------&#9676--------&#9676--------&#9676--------&#9679 ${data.destination}`
           

            for(let counter = 1; counter < data.directions.length; counter++){
                directionsList.innerHTML += `${counter}. ${data.directions[counter]} <br />`
            }

            
        }
    })
})})




