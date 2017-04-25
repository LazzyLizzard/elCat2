import React, { Component } from 'react'
class BreadCrumbItem extends Component {

    render() {
        const { breadCrumbsData } = this.props;

        return (

            <ul>
                {Object.keys(breadCrumbsData).map((key) => {
                    if (breadCrumbsData[key] !== null) {
                        let breadCrumbItem = breadCrumbsData[key];
                        return <li
                            key={key}>
                            <a href='#'>
                                {breadCrumbItem.name}
                            </a>
                        </li>
                    }
                })}
            </ul>
        );
    }
}

export default BreadCrumbItem;