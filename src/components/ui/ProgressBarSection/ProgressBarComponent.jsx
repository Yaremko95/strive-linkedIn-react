import React, { Component } from 'react'
import ContainerCard from '../cards/ContainerCard'
import {ProgressBar} from 'react-bootstrap'

class ProgressBarComponent extends Component {
  
  render() {
    const style={
    backgroundColor:'white !important'
    }
    return (
        <ContainerCard style={style}>
          <h5 style={{color:'#666666',paddingBottom:'17px'}}>Profile Strength: </h5>
           <ProgressBar animated now={45} />
        </ContainerCard>
    )
  }
}

export default ProgressBarComponent
