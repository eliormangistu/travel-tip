import { utilService } from "./util.service.js"

export const locService = {
    getLocs
}


const locs = [
    {id: utilService.makeId(), name: 'Greatplace', lat: 32.047104, lng: 34.832384, createdAt, updatedAt }, 
    {id: utilService.makeId(), name: 'Neveragain', lat: 32.047201, lng: 34.832581, createdAt, updatedAt }
]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs)
        }, 2000)
    })
}



// getWeather()
// function getWeather(){
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${32.047104}&lon=${34.832384}&appid=7d6f3e2d8e786615c4524849364658b4`

//     fetch.call(url)
//     .then (res=> console.log(res))
// }

function _createLoc (lat, lng, name) {
    return {id: utilService.makeId(), name, lat, lng, createdAt: Date.now() , updatedAt: Date.now() }
}