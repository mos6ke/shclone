import React from 'react'
import { Navbar,  Container } from 'react-bootstrap';
import ShIcon from "../Assets/images/sh-icon.png";


const Header = () => {
    return (
        <header className="App-header">
            <div>
                <div id="top-nav">
                    <Navbar bg="#f2f3f4" variant="dark">
                        <Container>
                            <Navbar.Brand >
                                <img
                                    src={ShIcon}
                                    width="300"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="sidehustle logo"
                                />
                            </Navbar.Brand>
                             <div className="ul-links">
                            <ul>
                                <li>
                                    
                                    <a href="#click" className="list-link-hover">
                                        Join Internship
                                    </a>
                                </li>
                                <li>
                                    <a href="#click" className="list-link-hover">
                                        Hire Talents
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </header>
    )
}
export default Header;