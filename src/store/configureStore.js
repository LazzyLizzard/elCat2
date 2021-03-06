import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore() {
    const logger = createLogger()
    const store = createStore(
        rootReducer,

        compose(
            applyMiddleware(thunk, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}