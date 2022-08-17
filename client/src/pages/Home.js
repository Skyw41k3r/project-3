import React from "react";
import { Card , Row, } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Home = () => (
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
);

export default Home;
