/**
 * умный компонент
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs'
import ManufsAndTypes from '../components/manufsAndTranspotTypes/ManufsAndTransportTypes'

import * as Actions from '../actions/getManufAndTransportTypes'

//import { bindActionCreators } from 'redux'



class App extends Component {


    componentDidMount() {
        const { loadDefaultPage } = this.props;

        // эта функа определена в mapDispatchToProps
        loadDefaultPage()

    }

    render() {
//        const ml = this.props.ml.manufacturers;
//        console.log(this.props);
//        const { ml, isLoading, trTypesData } = this.props;

        const { breadCrumbs } = this.props;

        return (

            <div>

                <h3>
                    Elcat
                </h3>



                <div><BreadCrumbs breadCrumbsPath={breadCrumbs} /></div>


                <div id='data'>

                    <div>
                        <ManufsAndTypes />
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
 * ИЗ state БЕРЕМ ТОЛЬКО НУЖНЫЕ ПАРАМЕТРЫ
 *
 * получаем в пропс значения из стейта
 * бердкрамбс определен статикой в кофигурации стора
 * @param breadCrumbs
 * @returns {{breadCrumbs: *}}
 */
function mapStateToProps({breadCrumbs, isLoading}) {
    return {
        breadCrumbs,
        isLoading
    }
}

function mapDispatchToProps(dispatch) {
    //return bindActionCreators({
    //    loadListStep1: getManufsAndTypes
    //});
    return {
        loadDefaultPage: () => dispatch(Actions.getManufsAndTypes())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);