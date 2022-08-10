import { Card, Col, Row, PageHeader } from "antd";
import React from "react";
import 'antd/dist/antd.css';
import'../../App.css';

const App = () => (
    <div>
        <PageHeader className="site-page-header"> Home </PageHeader>
        <Card>
            <Row>
                <Col> Something
                </Col>
            </Row>
        </Card>
    </div>
);

export default App;