/**
 * умный компонент
 */
import React, { Component } from 'react'
import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs'
//import { bindActionCreators } from 'redux'


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


export default App;