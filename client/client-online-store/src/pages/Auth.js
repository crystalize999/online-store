import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import Col from 'react-bootstrap/Col'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54 }}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your email'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your password'
                    />
                    <Col><Row className='d-flex justify-content-between mt-3'>
                        {isLogin ?
                            <div>
                            Don't have an account? <Col><NavLink to={REGISTRATION_ROUTE}>Register an account</NavLink></Col>
                        </div>
                            :
                            <div>
                                Do you have an account? <Col><NavLink to={LOGIN_ROUTE}>Login!</NavLink></Col>
                            </div>
                        }
                        <Col><Button
                            className='mt-3'
                            variant={"outline-success"}>
                            {isLogin ? 'Login' : 'Registration'}
                        </Button></Col>
                    </Row></Col>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;