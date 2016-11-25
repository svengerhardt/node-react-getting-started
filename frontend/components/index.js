import React from "react"
import {Link} from "react-router"
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Index extends React.Component {

    render() {
        return (
            <div>

                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">STICKERS BY GIPHY</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/stickers/dog">
                                <NavItem eventKey={1}>DOGS</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/stickers/cat">
                                <NavItem eventKey={2}>CATS</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/stickers/bird">
                                <NavItem eventKey={3}>BIRDS</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="content">
                    {this.props.children}
                </div>

            </div>
        );
    }
}
