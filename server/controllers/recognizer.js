//https://bitbucket.org/jasonjimnz/workspace/snippets/jE7bqp

const speechRec  = window.webkitSpeechRecognition || window.SpeechRecognition
const recognizer = new speechRec()
const btnStart   = document.querySelector('#start')

const setLang    = (lang) => {
  recognizer.lan = lang
  console.log(`setted lang: ${lang}`);
}

const setStatus  = (state) => {
  document.querySelector('.state').innerHTML=`${state}...`

  setTimeout(() => {
    document.querySelector('#start').value="STOP"
  }, 500)
}

const startLis   = () => {
  setLang('es')
  setStatus(states.lis)

  recognizer.onresult = event => {
    for (const result of event.results) console.log(result)
  }

  recognizer.start()
}

btnStart.onclick = startLis