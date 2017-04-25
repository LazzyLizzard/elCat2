/**
 * Created by Sergei_Frolov1 on 24.04.2017.
 */
import React, { Component } from 'react'
import BreadCrumbItem from './BreadCrumbItem'


class BreadCrumbs extends Component {

    render() {

        const { breadCrumbsPath } = this.props;

        return <BreadCrumbItem breadCrumbsData={breadCrumbsPath}/>


    }
}


export default BreadCrumbs;