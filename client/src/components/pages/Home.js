import React from "react";
import { Card , Row } from 'antd';
import 'antd/dist/antd.css';

const App = () => (
    <Row justify="center">
    <div>
         <Card
      title="Default size card"
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      size="small"
      title="Small size card"
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    </Row>
);

export default App;
