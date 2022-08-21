const speechRec  = window.webkitSpeechRecognition || window.SpeechRecognition
const recognizer = new speechRec()
const btnStart   = document.querySelector('#start')
const stateVal   = document.querySelector('.state')
const language   = document.querySelector('#language')
const response   = document.querySelector('.response')