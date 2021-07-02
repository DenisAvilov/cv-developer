import {LANQUAGE} from './type'

export const rootReducer = (state, action) => {
  let prevState
  let flag
  
  switch (action.type) {
    case LANQUAGE:    
    action.data === 'ua'
      ? localStorage.setItem('language', JSON.stringify('ua'))
        
      : localStorage.setItem('language', JSON.stringify('en'))  

    flag = JSON.parse( localStorage.getItem('language' ))
    
    prevState = state[flag] || {}
    prevState[action.data] = state[flag]
    return{      
        ...state, lang: prevState
    }
    default: return state
  }
}

