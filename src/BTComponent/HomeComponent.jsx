// rcc
import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='container-fluid'>
        HomeComponent
          <div className="row">
            <div className="col-12">
                <HeaderComponent/>
            </div>
            <div className="col-4">
                <NavigationComponent/>
            </div>
            <div className="col-8">
                <ContentComponent/>
            </div>
            <div className="col-12">
               <FooterComponent/>
            </div>
          </div>
      </div>
    )
  }
}
