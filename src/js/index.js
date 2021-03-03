import {Resume} from './../components/Resume'
import {Header} from './../components/header/Header'
import {Body} from './../components/body/Body'
import './../scss/index.scss'


const resume = new Resume('#app', {
  component: [Header, Body]
})

resume.render()
// window.cv = resume
// console.log('resume ', resume)
