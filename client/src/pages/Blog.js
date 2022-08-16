import React from "react";
import 'antd/dist/antd.css';
import { Input, Form, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const Blog = () => {
  return (
    <div>
                <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              /*<PlusOutlined />*/
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Submit</Button>
        </Form.Item>


    </div>
)};

export default Blog;
