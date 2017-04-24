import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

//import storeStructure from './store/sStruct'
import configureStore from './store/configureStore'
//

//const initialState = () => {
//    return {
//        isLoading: false
//    }
//}
const store = configureStore({
    breadCrumbs: [1,2,3]
});

render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
)

