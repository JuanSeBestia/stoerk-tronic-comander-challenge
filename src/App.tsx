import "./App.scss";
import Commander from "./modules/Commander/Commander";
import logo from "./assets/imgs/logo-stor.jpeg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

// Configure FontAwesome
import fontawesome from "@fortawesome/fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { chartSeries } from "./modules/Commander/components/Charts/chartSeries";

fontawesome.library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">
              <img
                className="d-none d-md-inline mx-2 logo"
                src={logo}
                alt="Logo"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                <NavDropdown title="TimeSeriesChart" id="basic-nav-dropdown">
                  {chartSeries.map((chart) => (
                    <NavDropdown.Item href={`#/${chart.path}`}>
                      {chart.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <main>
          <Switch>
            {chartSeries.map((chart) => (
              <Route path={`/${chart.path}`}>
                <Commander ChartComponent={chart.ChartComponent} />
              </Route>
            ))}
            <Route path="/">
              <h3 className="m-3">
                There is many demos to see different implementations of the
                charts, remember that it is very important to test them on
                mobile. Please only take into account the interaction of the
                chart
              </h3>
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
