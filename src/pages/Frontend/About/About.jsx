import { Col, Row } from 'antd'
import React from 'react'

function About() {
  return (
    <div>
      <Row>
        <Col span={12} sm={24} lg={12}>
          <Row>
            <Col span={24}>
              <h1>This is span 24</h1>
            </Col>
            <Col span={24}>
              <h1>This is 24</h1>
            </Col>
          </Row>
        </Col>
        <Col span={12} sm={24}  lg={12}>
          <h1>This is 12</h1>
        </Col>
      </Row>
    </div>
  )
}

export default About
