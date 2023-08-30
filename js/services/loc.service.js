import { utilService } from "./util.service.js"
import { storageService } from "./async-storage.service.js"

export const locService = {
    getLocs
}

const LOC_KEY = 'locDB'

// const locs = [
//     { id: utilService.makeId(), name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
//     { id: utilService.makeId(), name: 'Neveragain', lat: 32.047201, lng: 34.83258 }
// ]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(createLocs())
        }, 2000)
    })
}



// getWeather()
// function getWeather(){
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${32.047104}&lon=${34.832384}&appid=7d6f3e2d8e786615c4524849364658b4`

//     fetch.call(url)
//     .then (res=> console.log(res))
// }


function createLocs() {
    let locs = utilService.loadFromStorage(LOC_KEY)
    if (!locs || !locs.length) {
        _createDemoLocs()
    }
    return locs
}

function _createDemoLocs() {
    const locNames = ['Greatplace', 'Neveragain']
    const pos = [{ lat: 32.047104, lng: 34.832384 }, { lat: 32.047201, lng: 34.83258 }]

    const locs = locNames.map((locName, idx) => {
        const loc = _createLoc(locName)
        loc.lat = pos[idx].lat
        loc.lng = pos[idx].lng
        return loc
    })
    utilService.saveToStorage(LOC_KEY, locs)
    return locs
}

function getEmptyLoc(id = '', name = '', lat = '', lng = '', weather = 'UNKNOWN', createdAt = '', updatedAt = '') {
    return { id, name, lat, lng,weather, createdAt, updatedAt }
}

function _createLoc(name, lat, lng) {
    const loc = getEmptyLoc()
    loc.id = utilService.makeId()
    loc.name = name
    loc.lat = lat
    loc.lng = lng
    loc.weather
    loc.createdAt = utilService.getDateTime()
    loc.updatedAt = utilService.getDateTime()
    return loc
}