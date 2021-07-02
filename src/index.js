import {Resume} from './components/Resume'
import {Header} from './components/header/Header'
import {Body} from './components/body/Body'
import {initial} from './redux/initial'
import {rootReducer} from './redux/rootReducer'
import {createStore} from './core/createStore'
import './scss/index.scss'


const store = createStore(rootReducer, initial)


window.store = store


const resume = new Resume('#app', {
  component: [Header, Body]
}, store)

resume.render()
