import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

import { initManufAndTypes } from './actions/getManufAndTransportTypes';
import storeStructure from './store/storeStructure'
import configureStore from './store/configureStore'


//const initialState = () => {
//    return {
//        isLoading: false
//    }
//}
//const store = configureStore(storeStructure);

const store = configureStore();
store.dispatch(initManufAndTypes(storeStructure));

render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
)

