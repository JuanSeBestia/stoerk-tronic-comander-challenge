import "./App.scss";
import Commander from "./modules/Commander/Commander";
import logo from "./assets/imgs/logo-stor.jpeg";

// Configure FontAwesome
import fontawesome from "@fortawesome/fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

fontawesome.library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img className="d-none d-md-inline mx-2" src={logo} alt="Logo" />{" "}
            <span className="text-primary">Commander app</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Events</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Commander />
      </main>
    </div>
  );
}

export default App;
