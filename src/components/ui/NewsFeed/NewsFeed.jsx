import React from 'react'
import NFCard from './NFCard'
import {Col,Row} from 'react-bootstrap'
import InteractionCard from '../NewsFeed/InteractionCard'

export default function NewsFeed(props) {

    return (
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
    )
}
