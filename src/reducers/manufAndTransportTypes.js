/**
 * manufacturers and transport types
 */

import * as startPageActions from '../actions/getManufAndTransportTypes'



const initialState = {
    manufsAndTransportTypes: null,
    loading:false
};

export default function manufsAndTypes(state = initialState, action) {
    switch (action.type) {
        case startPageActions.MANUF_AND_TYPES_INIT:
            return action.payload.data;

        case startPageActions.MANUF_AND_TYPES_REQ:
            return Object.assign({}, state, {
                loading: true
            });

        case startPageActions.MANUF_AND_TYPES_SUCC:
            return Object.assign({}, state, {
                loading: false,
                manufsAndTransportTypes: action.payload.manufsAndTransportTypes
            });

        default:
            return state;

    }
}
