//logs before and after state to the console. If data thunk pass in dispatch and get state

export const logger = store => next => action => {
  if(typeof action === 'function'){
    action(store.dispatch, store.getState)
  } else { 
    console.log('dispatch', store.getState())
    next(action)
    console.log('after dispatch', store.getState())
    }
}