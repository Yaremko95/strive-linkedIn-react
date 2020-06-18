import React, { Component } from 'react'
import ContainerCard from '../cards/ContainerCard'
import {ProgressBar} from 'react-bootstrap'

const spanStyle={
    fontWeight:'bold',
    color:'black'
}

class ProgressBarComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    {console.log('here')}
    let profilestrength
    const style={
    backgroundColor:'white !important'
    }
        return (
          
        <ContainerCard background='white' style={style}>
          <h5 style={{color:'#666666',paddingBottom:'17px'}}>Profile Strength: &nbsp;
          <span style={spanStyle} >{this.props.profilestrength.strength}</span>  </h5>
           <ProgressBar animated now={this.props.profilestrength.percentage} />
        </ContainerCard>
    )

}
}

export default ProgressBarComponent
