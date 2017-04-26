/**
 * manufacturers and transport types
 */

import * as startPageActions from '../actions/getManufAndTransportTypes'



//const initialState = {
//    manufsAndTransportTypes: null,
//    isLoading: false
//};

export default function manufsAndTypes(state, action) {
    switch (action.type) {

        case startPageActions.MANUF_AND_TYPES_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });

        case startPageActions.MANUF_AND_TYPES_SUCC:
            return Object.assign({}, state, {
                isLoading: false,
                manufacturers: action.payload.manufacturers,
                transportTypesData: action.payload.transportTypesData
            });

        default:
            return state;

    }
}
