import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForms from './SignupForms';
import LoginForms from './LoginForms';
import Auth from '../utils/auth';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
    // set modal display state
    return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(4).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Blog</Breadcrumb.Item>
        <Breadcrumb.Item>About Us</Breadcrumb.Item>
        <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        <Breadcrumb.Item>LogIn</Breadcrumb.Item>
        <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
     The Gallery from UofA Bootcamp.
    </Footer>
  </Layout>
)};

export default App;
