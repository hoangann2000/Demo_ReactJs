import React, { Component } from 'react'

export default class NavBarProps extends Component {

    render() {
        // + props được tạo sẵn trong class Component của reactjs
        console.log(this.props);
        // console.log(this.props.styleFS);
        let {styleColor,stylebgColor,styleFS} = this.props;

        return (
            <nav className="navbar navbar-dark bg-dark">
                <a style={{color: styleColor, backgroundColor: stylebgColor, fontSize:styleFS}} className="navbar-brand" href="#">Navbar</a>
            </nav>

        )
    }
}
