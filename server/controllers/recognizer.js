const setLang    = (lang) => {
  recognizer.lan       = lang
  recognizer.continous = true
  recognizer.interim   = true
  console.log(`setted lang: ${lang}`)
}

const setStatus  = (state,btn) => {
  state==states.lis
    ?
  stateVal.setAttribute('class', 'state animated')
    :
  stateVal.setAttribute('class', 'state')

  stateVal.innerHTML=`${state}`

  setTimeout(() => {
    btnStart.value=btn
  }, 500)
}

const startLis   = () => {
  var stateBtn   = btnStart.value
  if (stateBtn == btnVal.str) {
    if (language.value==0) {
      alert('You should set a valid language first')
    } else {
      setLang(language.value)
      setStatus(states.lis, btnVal.stp)

      recognizer.onresult = (event) => {
        for (const result of event.results) {
          response.innerHTML=result[0].transcript
          console.log(result[0].transcript)
        }
      }
      recognizer.start()
    }
  } else {
    setStatus(states.fns, btnVal.str)
    recognizer.stop()
  }
}