import React, { useEffect, useState, useContext } from 'react';
import '../styles/global.css';
// import { ReactComponent as GameFiles } from '../images/game'
import { Devices, LockKey, GameController, DiamondsFour } from '@phosphor-icons/react';
import UserContext from '../contexts/userContext';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {
    const [verify, setVerify] = useState(null);

    let { verifyUser } = useContext(UserContext);
    const userRatings = [
        {
            name: 'Ren Kage',
            comment: 'This was so fun! Highly recommended.',
        },
        {
            name: 'Toph Beifong',
            comment: 'I crushed that ai! So awesome.',
        },
        {
            name: 'Sadie Han',
            comment: 'Solitare is my favorite. Loved this application.',
        },
    ];

    useEffect(() => {
        async function fetch() {
            setVerify(await verifyUser());
        }
        const token = localStorage.getItem('myUsertoken');
        if (token) {
            fetch();
        }
    }, [])
    if (verify) {
        return (
            <>
                <Container className="center-container">
                    <Row className="conter-align">
                        <Col md={6}>
                            <h1 className="display-3">Have some fun playing games!</h1>
                        </Col>
                        <Col md={6}>
                            {/* <GameFiles /> */}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h4>01 - Our Users</h4>
                            <h2 className="display-6">Simple Games is a fun site with a few popular games.</h2>
                        </Col>
                        <Col md={3}>
                            <h1 className="display-1">25k+</h1>
                            <h5>Total Users</h5>
                        </Col>
                        <Col md={3}>
                            <h1 className="display-1">1.5k+</h1>
                            <h5>User Ratings</h5>
                        </Col>
                    </Row>
                    <Row>
                        {userRatings.map((rating, index) => {
                            <Col key={index} md={4} className="md-4">
                                <div className="rating" style={{ paddingTop: '13vw' }}>
                                    <div className="rating-comment">
                                        {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                                    width="100%" viewBox="0 0 225 225" enable-background="new 0 0 225 225" xml:space="preserve">
                                            <path></path>
                                        </svg> */}
                                        <br />
                                        <h2>{rating.comment}</h2>
                                    </div>
                                    <div className="rating-name">{rating.name}</div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h4>02 - Our Services</h4>
                            <h2 classsName="display-6">Discover how our games</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '90px', norder: 'solid', padding: '40px', borderRadius: '20px' }}>
                        <Col md={6} lg={6} xl={3} className="mb-4">
                            <div className="services">
                                <GameController className="services-icon" size={64} weight="thin" color="var(--accent-color" />
                                <h2>Games</h2>
                                <p>Our site offers three fun games to play</p>
                            </div>
                        </Col>
                        <Col md={6} lg={6} xl={3} className="mb-4">
                            <div className="services">
                                <LockKey className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                                <h2>
                                    Secure
                                    <br />
                                    Storage
                                </h2>
                                <p>With LegalEase, you can confidently store your documents in one secure location, protected by robust encryption providing peace of mind knowing that your information is safe.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={6} xl={3} className="mb-4">
                            <div className="services">
                                <DiamondsFour className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                                <h2>Tic tac toe</h2>
                                <p>LegalEase utilizes intelligent algorithms and advanced functionalities, enabling you to quickly extract relevant information, saving you valuable time and effort.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={6} xl={3} className="mb-4">
                            <div className="services">
                                <Devices className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                                <h2>Solitare</h2>
                                <p>Whether you're using a desktop computer, laptop, tablet, or smartphone, our mobile-friendly app ensures that you have secure access to your documents on the go.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    } else {
        return (
            <>
                <Container className="center-container">
                    <Row className="center-align">
                        <Col md={6}>
                            <h1 className="display-3">Streamline your life with ease</h1>
                            <h4>LegalEase effortlessly manages your personal information and vital documents, all conveniently stored in one secure location</h4>
                            <Button variant="secondary" href="/signup" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                Get Started
                            </Button>
                        </Col>
                        <Col md={6}>
                            {/* <GameFiles /> */}
                        </Col>
                    </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>01 — Our Users</h4>
                        <h2 className="display-6">LegalEase is the trusted solution for individuals and businesses</h2>
                    </Col>
                    <Col md={3}>
                        <h1 className="display-1">25k+</h1>
                        <h5>Total Users</h5>
                    </Col>
                    <Col md={3}>
                        <h1 className="display-1">1.5k+</h1>
                        <h5>User Ratings</h5>
                    </Col>
                </Row>
                <Row>
                    {userRatings.map((rating, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <div className="rating" style={{ paddingTop: '13vw' }}>
                        <div className="rating-comment">
                            {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                        width="100%" viewBox="0 0 225 225" enable-background="new 0 0 225 225" xml:space="preserve">
                            <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                            </svg> */}
                            <br />
                            <h2>{rating.comment}</h2>
                        </div>
                        <div className="rating-name">{rating.name}</div>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>02 — Our Services</h4>
                        <h2 className="display-6">Discover how our innovative solutions can transform the way you manage your information.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: '90px', border: 'solid', padding: '40px', borderRadius: '20px' }}>
                    <Col md={6} lg={6} xl={3} className="mb-4">
                        <div className="services">
                            <GameController className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                            <h2>Document Organization</h2>
                            <p>LegalEase offers a comprehensive and intuitive system to efficiently organize, categorize, and manage your personal information and important documents, ensuring easy accessibility whenever you need them.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={3} className="mb-4">
                        <div className="services">
                            <LockKey className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                            <h2>
                            Secure
                            <br />
                            Storage
                            </h2>
                            <p>With LegalEase, you can confidently store your documents in one secure location, protected by robust encryption providing peace of mind knowing that your information is safe.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={3} className="mb-4">
                        <div className="services">
                            <DiamondsFour className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                            <h2>Smart Document Management</h2>
                            <p>LegalEase utilizes intelligent algorithms and advanced functionalities, enabling you to quickly extract relevant information, saving you valuable time and effort.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={3} className="mb-4">
                        <div className="services">
                            <Devices className="services-icon" size={64} weight="thin" color="var(--accent-color)" />
                            <h2>Document Access on the Go</h2>
                            <p>Whether you're using a desktop computer, laptop, tablet, or smartphone, our mobile-friendly app ensures that you have secure access to your documents on the go.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
        );
    }
}

export default Home;