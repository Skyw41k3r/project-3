import React from "react";
import { Card , Row } from 'antd';
import 'antd/dist/antd.css';
import pixelOrc from '../images/pixel-orc.png';
import pixelSkull from '../images/pixel-skull.png';
import pixelDonut from '../images/pixel-donut.png';
import {
   BrowserRouter as Router,
   Link,
 } from "react-router-dom";


const Home = () => (
   <div>
   <div>
   <div className="main-container">
   <div className="left-container">
     <h1>Afforable Art a Click Away</h1>
     <p> Sign Up for exclusive discounts and deals. You'll meet our artists, 24/7 consulting - and more.</p>
     <Link to="/"><a className="primary-cta">Sign Up</a></Link>
     <Link to = "/"><a className = "secondary-cta"> Sign In</a></Link>
   </div>

   <div className="right-container">
   <div className="image-container">
     picture here
   </div>
   </div>

   </div>
  </div>
   <div className="secondary-container">
   <Row justify="center" className="home-row">
      <div>



      <Card
      className="home-card-1"
      hoverable
      style={{
         width: 240,
      }}
      cover={<img alt="example" src={pixelOrc} />}
      >
      
      Heres where we can include our database info
      </Card>

      <Card
      className="home-card-2"
      hoverable
      style={{
         width: 240,
      }}
      cover={<img alt="example" src={pixelSkull} />}
      > 
      Here where we can include our database info
      </Card>

      <Card
      className="home-card-3"
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
   </div>
   </div>

);

export default Home;
