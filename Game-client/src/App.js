import React from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import  Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import EditProfile from './components/EditProfile';
import TTT from './components/ttt';
import Footer from './components/Footer';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import DisplayProfile from './components/DisplayProfile';
import { UserProvider } from './contexts/UserProvider';
import { Container } from 'react-bootstrap';
import './styles/global.css';

function App() {
  return (
    <UserProvider>
      <div
        style={{
          backgroundColor: 'var(--neutral-colot)',
        }}
      >
        <BrowserRouter>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/displayprofile" element={<DisplayProfile />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/ttt" element={<TTT />} />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;