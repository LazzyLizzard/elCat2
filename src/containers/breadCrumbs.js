/**
 * Created by Sergei_Frolov1 on 24.04.2017.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

class BreadCrumbs extends Component {

    render() {
        console.log(this.props);
        return (
            <ul>
                <li>123</li>
            </ul>
        )
    }
}

function mapStateToProps({breadCrumbs}) {
    return {
        breadCrumbs
    }
}


export default connect(mapStateToProps)(BreadCrumbs);