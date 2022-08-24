import React, { useState } from "react";
import { Card, Row, Col, Button, Upload } from "antd";
import "antd/dist/antd.css";
import { LikeOutlined, DislikeOutlined, CommentOutlined, CameraOutlined } from "@ant-design/icons";
import large from "../images/large.jpg"
import pixelOrc from "../images/pixel-orc.png";
import pixelSkull from "../images/pixel-skull.png";
import pixelDonut from "../images/pixel-donut.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
const images = [pixelOrc, pixelSkull, pixelDonut]
const Home = (props) => {

  const [userFiles, setUserFiles] = useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const arrayFiles = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

      setUserFiles((previewImages) => previewImages.concat(arrayFiles));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file));
    }
  };

  const renderImages = (source) => {
    return source.map((image) => {
      return (
        <Row className="home-row" orientation="left" >
            <div className="card-li">
            <Col span={5}>
            <Card
              className="home-card"
              hoverable
              style={{
                width: 240,
              }}
              cover={<img src={image} alt='' key={image} />}
            >
              <div className="card-container">
                <div className="db-comment">
                  Here where we can include our database info
                </div>
                <div className="likeandcomment">
                  <div className="likebtn">
                    <LikeOutlined />
                  </div>
                  <div className="dislikebtn">
                    <DislikeOutlined />
                  </div>
                  <div className="commentbtn">
                    <CommentOutlined />
                  </div>
                </div>
              </div>
            </Card>
            </Col>
            </div>
            </Row>
      )
    })
  };


  return (

    <div>
      <div>
        <div className="main-container">
          <div className="left-container">
            <h2>Image Upload:</h2>
            <div>
              <input type="file" id="file" multiple onChange={handleImageChange} />
              <div className="label-holder">
                <label htmlFor="file" className="label"></label>
              </div>
            </div>
          </div>
          <div className="right-container">
            <img src={large}></img>
            <div className="image-container">
            </div>
          </div>
        </div>
      </div>
      <div className="secondary-container">
        <Row className="home-row" orientation="left" >
        {renderImages(userFiles)}
          {images.map(image => {
            return <div className="card-li">
              <Col span={8}>
                <Card
                  className="home-card"
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={image} />}
                >
                  <div className="card-container">
                    <div className="db-comment">
                      Here where we can include our database info
                    </div>
                    <div className="likeandcomment">
                      <div className="likebtn">
                        <LikeOutlined />
                      </div>
                      <div className="dislikebtn">
                        <DislikeOutlined />
                      </div>
                      <div className="commentbtn">
                        <CommentOutlined />
                      </div>
                    </div>
                  </div>
                </Card>
                </Col>
            </div>
          })}
          {/* <div className="card-li">
          <Col span={8}> */}
          {/* <Card
            className="home-card"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pixelOrc} />}
          >
            <div className="card-container">
              <div className="db-comment">
                Here where we can include our database info
              </div>
              <div className="likeandcomment">
                <div className="likebtn">
                  <LikeOutlined />
                </div>
                <div className="dislikebtn">
                  <DislikeOutlined />
                </div>
                <div className="commentbtn">
                <CommentOutlined />
                </div>
              </div>
            </div>
          </Card>
          </Col>
          </div>
          <div className="card-li">
            <Col span={8}>
          <Card
            className="home-card"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pixelOrc} />}
          >
            <div className="card-container">
              <div className="db-comment">
                Here where we can include our database info
              </div>
              <div className="likeandcomment">
                <div className="likebtn">
                  <LikeOutlined />
                </div>
                <div className="dislikebtn">
                  <DislikeOutlined />
                </div>
                <div className="commentbtn">
                <CommentOutlined />
                </div>
              </div>
            </div>
          </Card>
          </Col>
          </div>
          <div className="card-li">
            <Col span={8}>
          <Card
            className="home-card"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pixelOrc} />}
          >
            <div className="card-container">
              <div className="db-comment">
                Here where we can include our database info
              </div>
              <div className="likeandcomment">
                <div className="likebtn">
                  <LikeOutlined />
                </div>
                <div className="dislikebtn">
                  <DislikeOutlined />
                </div>
                <div className="commentbtn">
                <CommentOutlined />
                </div>
              </div>
            </div>
          </Card>
          </Col>
          </div>
          <div className="card-li">
          <Col span={8}>
          <Card
            className="home-card"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pixelSkull} />}
          >
            <div className="card-container">
              <div className="db-comment">
                Here where we can include our database info
              </div>
              <div className="likeandcomment">
                <div className="likebtn">
                  <LikeOutlined />
                </div>
                <div className="dislikebtn">
                  <DislikeOutlined />
                </div>
                <div className="commentbtn">
                <CommentOutlined />
                </div>
              </div>
            </div>
          </Card>
          </Col>
          </div>
          <div className="card-li">
          <Col span={8}>
          <Card
            className="home-card"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pixelDonut} />}
          >
            <div className="card-container">
              <div className="db-comment">
                Here where we can include our database info
              </div>
              <div className="likeandcomment">
                <div className="likebtn">
                  <LikeOutlined />
                </div>
                <div className="dislikebtn">
                  <DislikeOutlined />
                </div>
                <div className="commentbtn">
                <CommentOutlined />
                </div>
              </div>
            </div>
          </Card> */}
          {/* </Col>
        </div> */}
        </Row>
      </div>
    </div>
  )
};

export default Home;
