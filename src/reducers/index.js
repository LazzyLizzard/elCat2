import { combineReducers } from 'redux'
import manufsAndTransportTypesReducer from './manufAndTransportTypes'

export default combineReducers({
    manufsAndTransportTypes: manufsAndTransportTypesReducer
})

