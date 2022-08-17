import React from "react";
import { Card , Row } from 'antd';
import 'antd/dist/antd.css';
import LoginForms from "../components/LoginForms";

const Login = () => {
 return (
    <Row>
        <LoginForms />
    </Row>
 )
}

export default Login;