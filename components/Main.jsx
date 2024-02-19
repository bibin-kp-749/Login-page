import React from 'react'
import './All.css'
import ImageComponent from './ImageComponent'
import Formsection from './Formsection'
import { Col,Row } from 'react-bootstrap'

function Main() {
  return (
    <div id='subsection'>
      <Row>
      <Col>
      <ImageComponent/>
      </Col>
      <Col><Formsection/></Col>
      </Row>
    </div>
  )
}

export default Main
