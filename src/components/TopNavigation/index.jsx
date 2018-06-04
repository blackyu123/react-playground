import React from "react"
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
import "./TopNavigation.css"

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.handleTogglerClicked = this.handleTogglerClicked.bind(this)
  }

  render() {
    const { isOpen } = this.state

    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">React Reddit</NavbarBrand>
          <NavbarToggler onClick={this.handleTogglerClicked}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }

  // event handler
  handleTogglerClicked() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
}
