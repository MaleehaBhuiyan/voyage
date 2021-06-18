console.log("Client side js loaded")

const locations = document.querySelector('form')
const inputOne = document.querySelector('#startPoint')
const inputTwo = document.querySelector('#destination')
const directionsUl = document.querySelector('#directions')

locations.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const startPoint = inputOne.value 
    const destination = inputTwo.value

    fetch('http://localhost:3000/directions?startLocation=' + startPoint +'&destination=' + destination).then((resp) => {
        resp.json().then((data) => {
        if(data.error){
            directionsUl.textContent = data.error
        } else {

            directionsUl.innerHTML = `
            <li>${data.directions}</li>
            `
            console.log(data.directions)

            
        }
    })
})})
