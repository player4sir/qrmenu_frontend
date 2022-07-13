import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React from 'react';


const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar bg="light" variant='light' className='mb-4'>
                <Navbar.Brand href='/'>木子科技</Navbar.Brand>
                <Nav className='flex-grow-1 justify-content-end'>
                    <Nav.Link href='/login'>登录</Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                {children}
            </Container>
        </>

    )
}

export default MainLayout;