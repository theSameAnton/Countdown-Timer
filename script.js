'use strict'

const daysEl = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2023'

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600 % 24)
    const minutes = Math.floor(totalSeconds / 60 % 60)
    const seconds = Math.floor(totalSeconds % 60)

    daysEl.textContent = days
    hoursEL.textContent = hours
    minsEl.textContent = minutes
    secondsEl.textContent = seconds
}

countdown()

setInterval(countdown, 1000)