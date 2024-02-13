import React, { useEffect, useState, useContext } from 'react';
import '../styles/global.css';
import { ReactComponent as GameFiles } from '../images/games'
import { Devices, LockKey, DiamondsFour } from '@phosphor-icons/react';
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
                            <GameFiles />
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
                                        
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home;