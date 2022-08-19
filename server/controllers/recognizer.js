//https://bitbucket.org/jasonjimnz/workspace/snippets/jE7bqp

const speechRec  = window.webkitSpeechRecognition || window.SpeechRecognition
const recognizer = new speechRec()

const defLang    = (lang) => {
  recognizer.lan = lang
  console.log(`setted lang: ${lang}`);
}

const startRec   = () => {
  defLang('es')

  recognizer.onresult = event => {
    for (const result of event.results) console.log(result)
  }

  recognizer.start()
}

startRec()