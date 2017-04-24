import React, { Component } from 'react'
import BreadCrumbs from './breadCrumbs'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class App extends Component {

    render() {
//        const ml = this.props.ml.manufacturers;
//        console.log(this.props);
//        const { ml, isLoading, trTypesData } = this.props;
        return (
            <div>
                <div><BreadCrumbs  /></div>

                <h3>
                    Elcat
                </h3>

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

function mapStateToProps({breadCrumbs}) {
    return {
        breadCrumbs
    }

}

export default connect(mapStateToProps)(App);