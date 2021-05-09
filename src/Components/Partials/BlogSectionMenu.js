import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
 * Component for showing the menu of Blog Section
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const BlogSectionMenu = () => {
    return (
        <header className="partial blog menu" style={{ borderTop: "solid thin black", borderBottom: "solid thin black" }}>
            <Navbar className="justify-content-center" fill="true" variant="tabs">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/posts">Posts</Nav.Link>
                        <Nav.Link id="categories_link" href="/categories">Categories</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default BlogSectionMenu;