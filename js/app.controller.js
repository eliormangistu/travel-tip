import { storageService } from './services/async-storage.service.js'
import { utilService } from './services/util.service.js'
import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'

window.onload = onInit
window.onAddMarker = onAddMarker
window.onPanTo = onPanTo
window.onGetLocs = onGetLocs
window.onGetUserPos = onGetUserPos
window.onGo = onGo
window.onDelete = onDelete

function onInit() {
    mapService.initMap()
        .then(() => {
            onGetLocs()
            console.log('Map is ready')
        })
        .catch(() => console.log('Error: cannot init map'))
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
    console.log('Getting Pos')
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function onAddMarker() {
    console.log('Adding a marker')
    mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 })
}

function onGetLocs() {
    locService.getLocs()
        .then(renderTable)
}

function renderTable(locs) {
    const locsStrsHtml = locs.map((loc) => {
        return ` <tr>
      <td>${loc.id}</td>
      <td>${loc.name}</td>
      <td>${loc.lat}</td>
      <td>${loc.lng}</td>
      <td>${loc.weather}</td>
      <td>${loc.createdAt}</td>
      <td>${loc.updatedAt}</td>
      <td><button onclick="onGo()">Go</button></td>
      <td><button onclick="onDelete()">Delete</button></td>
      </tr>`
    })
    console.log('Locations:', locs)
    document.querySelector('.locs').innerHTML = locsStrsHtml.join('')
}

function onGetUserPos() {
    getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords)
            document.querySelector('.user-pos').innerText =
                `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
        })
        .catch(err => {
            console.log('err!!!', err)
        })
}
function onPanTo() {
    console.log('Panning the Map')
    mapService.panTo(35.6895, 139.6917)
}

function onGo() {

}

function onDelete() {

}