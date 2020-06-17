import {createStore,applyMiddleware} from 'redux'
import {items} from '../reducers/index'
import thunk from 'redux-thunk'

const store = createStore(items,applyMiddleware(thunk))
store.subscribe(() => console.log('Update coming ...',store.getState()))

export default store