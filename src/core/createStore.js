
export const createStore = ( rootReducer, initialState = {} ) => {
    let state = rootReducer({...initialState}, {type: '__INIT__'},)
    const listener = []
    return {
        subscribeStore(fn){
            listener.push(fn)
            return{
                unsubscribeStore(){
                    listener => listener.filter(l => l !== fn)
                }
            }
        },
        dispatch(action) {
            state = rootReducer(state, action)
            listener.forEach(listener => listener(state))
        },
        getStore() {
            return state
        }
    }   
}

