/**
 * умный компонент
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs'

import ManufsAndTransportTypes from '../components/manufsAndTranspotTypes/ManufsAndTransportTypes'
//import { bindActionCreators } from 'redux'



class App extends Component {

    render() {
//        const ml = this.props.ml.manufacturers;
//        console.log(this.props);
//        const { ml, isLoading, trTypesData } = this.props;
        const {breadCrumbs} = this.props;
        return (


            <div>

                <h3>
                    Elcat
                </h3>



                <div><BreadCrumbs breadCrumbsPath={breadCrumbs} /></div>


                <div id='data'>

                    <div>
                        manuf and types ->
                    </div>

                    <div>
                        years ->
                    </div>

                    <div>
                        models list ->
                    </div>

                    <div>
                        model - details groups ->
                    </div>

                    <div>
                        detail group
                    </div>

                </div>


            </div>
        )
    }

}
/**
 * получаем в пропс значения из стейта
 * @param breadCrumbs
 * @returns {{breadCrumbs: *}}
 */
function mapStateToProps({breadCrumbs}) {
    return {
        breadCrumbs
    }
}


export default connect(mapStateToProps)(App);