import React, { useContext, useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/userContext';
// import { Reactcomponent as SignUpPeople } from '../images/signUpPeople.svg';

const SignUp = () => {
    const [verify, setVerify] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    let { createUser, verifyUser } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            setVerify(await verifyUser());
        }
        const token = localStorage.getItem('myUserToken');
        if (token) {
            fetch();
        }
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        createUser(username, password, firstName, lastName, email)
        .then(() => {
            navigate('/signin');
        })
        .catch((error) => {
            console.log(error);
            window.alert('Failed to register: error Creating user');
        });
    }

    if (verify) {
        return 
        <h2>You are already signed in</h2>
    } else {
        return (
            <Container>
                <Row className="cetner-align">
                    <Col md={6}>
                        {/* <SignUpPeople className="svg-auto-size" /> */}
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <h1>Create an Account</h1>
                            <Form.Group className="custom-form" controlId="username">
                                <Form.Label className="custom-label">Username</Form.Label>
                                <Form.Contol type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="custom-form" controlId="password">
                                <Form.Label className="custom-label">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="custom-form" controlId="firstname">
                                <Form.Label className="custom-label">First Name</Form.Label>
                                <Form.Contol type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="custom-form" controlId="lastName">
                                <Form.Label className="custom-label">Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="custom-form" controlId="email">
                                <Form.Label className="custom-label">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Button size="lg" type="submit">
                                Register
                            </Button>
                        </Form>
                        <p style={{ paddingTop: '1rem' }}>
                            <span>Already have an account?</span>
                        </p>
                        <Button variant="secondary" href="/signin">
                            Sign In
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default SignUp;