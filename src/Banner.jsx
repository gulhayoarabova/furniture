import React from 'react';
import { Divider, Row, Col, Image } from 'antd';
import rasm1 from "./assets/rasm1.webp"
import rasm2 from "./assets/rasm2.webp"
import rasm3 from "./assets/rasm3.webp"
import rasm4 from "./assets/rasm4.webp"
import rasm5 from "./assets/rasm5.webp"
import rasm6 from "./assets/rasm6.webp"
import './App.css'

const Banner = () => (
  <>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Row gutter={[16, 16]} justify="center" >
          <Col span={6}>
            <Image width="100%" src={rasm1} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm2} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm3} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm4} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm4} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm5} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm6} />
          </Col>
          <Col span={6}>
            <Image width="100%" src={rasm1} />
          </Col>
        </Row>
      </Col>
    </Row>
  </>
);

export default Banner;
