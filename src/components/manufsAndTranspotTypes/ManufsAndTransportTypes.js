/**
 * Created by Sergei_Frolov1 on 25.04.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../actions/getManufAndTransportTypes'

class ManufsAndTypes extends Component {



    render () {
        return <div>

        </div>
    }

}


function mapDispatchToProps(dispatch) {
    return {
        loadDefaultPage: () => dispatch(Actions.getManufsAndTypes())
    }
}

export default connect(null, mapDispatchToProps)(ManufsAndTypes);