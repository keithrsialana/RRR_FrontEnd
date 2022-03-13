import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import SearchButton from '../img/search.png';

class Header extends React.Component{
    render () {
        return(
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    {/* Brand Icon */}
                    <Navbar.Brand href='/'>Radical Random Recipes</Navbar.Brand>

                    {/* Pages */}
                    <Nav className="me-auto">
                        <Nav.Link href='/account/login'>Login</Nav.Link>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/account/profile'>Profile</Nav.Link>
                        <Nav.Link href='/account/recipes'>My Recipes</Nav.Link>
                        {/* <Nav.Link href='/recipe/?'>Random Recipe</Nav.Link> */}
                        <Nav.Link href='/search'>
                            <img src={SearchButton} height='20' alt='Search Button'/>
                        </Nav.Link>
                    </Nav>
                </Container>
                {/* <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/account/login'>Login</Link></li>
                    <li><Link to='/account/profile'>Profile</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                    <li><Link to='/account/recipes'>My Recipes</Link></li>
                </ul> */}
                <div className='accountBox'>
                    Welcome User!
                </div>
            </Navbar>

            <Outlet/>
        </div>
        );
    }
}

export default Header;