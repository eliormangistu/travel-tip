export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    getRandomIntInclusive,
    // randomPastTime,
    // randomPetName,
    // randomPetType
    getDateTime
}

const gPetNames = ['Bob', 'Charls', 'Chip']
const gPetTypes = ['cat', 'dog', 'bird', 'fish', 'rabbit']

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}
// function randomPetName() {
//     return gPetNames[parseInt(Math.random() * gPetNames.length)]
// }
// function randomPetType() {
//     return gPetTypes[parseInt(Math.random() * gPetTypes.length)]
// }

// function randomPastTime() {
//     const HOUR = 1000 * 60 * 60
//     const DAY = 1000 * 60 * 60 * 24
//     const WEEK = 1000 * 60 * 60 * 24 * 7

//     const pastTime = getRandomIntInclusive(HOUR, WEEK)
//     return Date.now() - pastTime
// }