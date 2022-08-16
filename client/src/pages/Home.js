import React from "react";
import { Card , Row } from 'antd';
import 'antd/dist/antd.css';
import pixelOrc from '../images/pixel-orc.png';
import pixelSkull from '../images/pixel-skull.png';
import pixelDonut from '../images/pixel-donut.png';


const Home = () => (
   <Row justify="center">
      <div>
      <Card
      hoverable
      style={{
         width: 240,
      }}
      cover={<img alt="example" src={pixelOrc} />}
      >
      Heres where we can include our database info
      </Card>

      <Card
      hoverable
      style={{
         width: 240,
      }}
      cover={<img alt="example" src={pixelSkull} />}
      > 
      Heres where we can include our database info
      </Card>

      <Card
      hoverable
      style={{
         width: 240,
      }}
      cover={<img alt="example" src={pixelDonut} />}
      >
      Heres where we can include our database info
      </Card>
      </div>
   </Row>
);

export default Home;
