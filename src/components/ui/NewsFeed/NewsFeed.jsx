import React from 'react'
import NFCard from './NFCard'
import {Col,Row} from 'react-bootstrap'
import InteractionCard from '../NewsFeed/InteractionCard'
import ModalCustom from '../modals/ModalCustom'
import UpdateData from '../../../data/UpdateData'
import PostForm from '../../form/PostForm'
 

function NewsFeed(props) {

 
    return (
      <>
        <Row>
        <Col md={2}>

        </Col>
        <Col md={7}>
       
              
             <InteractionCard {...props}/>
            
         
          
          <NFCard {...props}/>
        </Col>
        <Col md={3}>
        
        </Col>
        
        </Row>
        </>
    )
}
export default NewsFeed