import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as GameLogo } from '../images/game.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Header.css';
import UserContext from '../contexts/userContext';
import {  Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    let navigate = useNavigate();
    const [verify, setVerify] = useState(null);
    let { userId } = useParams();

    const [user, setUser] = useState({
        firstName: '',
    });

    let { getUser, signOutUser, verifyUser } = useContext(UserContext);

    const handleSignOut = (event) => {
        event.preventDefault();
        signOutUser()
            .then(() => {
                navigate('/');
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                window.alert('Failed Edit: error updating user');
            });
    };

    useEffect(() => {
        async function fetch() {
            await getUser(userId).then((userId) => setUser(userId));
            setVerify(await verifyUser());
        }

        const token = localStorage.getItem('myUserToken');
        if (token) {
            fetch();
        }
    }, [getUser, userId]);

    if (verify) {
        return (
            <Navbar collapseOnSelect expand="sm" className="custom-navbar">
                <Navbar.Brand href="/">
                    <GameLogo alt="" width="120" height="30" className="d-inline-block align-top" style={{ marginright: '20px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>

                    <Nav className='ml-auto'>
                        <div className="d-flex align-items-center">
                            <NavDropdown title={`Hello, ${user.firstName}`} id="collasible-nav-dropdown dropdown-menu-align-end" align="end">
                                <NavDropdown.Item href="/displayprofile">View Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/ttt">Tic Tac Toe</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    } else {
        return (     
            <Nav collapseOnSelect expand="sm" className='custom-navbar'>
                <Navbar.Brand href="/">
                    <GameLogo alt="" width="120" height="30" className="d-inline-block align-top" style={{ marginright: "20px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>

                    <Nav className='ml-auto'>
                        <div className='d-flex align-items-center'>
                            <Nav.Link href="/signin">Sign In</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Nav> 
        );
    }
};

export default Header;