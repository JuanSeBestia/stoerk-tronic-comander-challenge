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
import {
  chartLine,
  chartSeries,
} from "./modules/Commander/components/Charts/chartSeries";

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
              />
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
                <NavDropdown title="TimeLineChart" id="basic-nav-dropdown">
                  {chartLine.map((chart) => (
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
            {chartLine.map((chart) => (
              <Route path={`/${chart.path}`}>
                <Commander ChartComponent={chart.ChartComponent} />
              </Route>
            ))}
            <Route path="/">
              <h3 className="m-3">
                There is many demos to see different implementations of the
                charts, remember that it is very important to test them on
                mobile. Please only take into account the interaction of the
                chart. Each chart will render in relative time: 
                <li>"hour": will render 40 timestamps x 9 channels == ${40 * 9} on 26KB</li>
                <li>"day": will render 960 timestamps x 9 channels == ${960 * 9} on 586KB</li>
                <li>"week": will render 6638 timestamps x 9 channels == ${960 * 9} on 3.2MB</li>
                <li>"month": will render 6638 timestamps x 9 channels == ${960 * 9}on 14M</li>               
              </h3>
              <div className="m-3">
                <h2>TimeRangeSeries:</h2>
                {chartSeries.map((chart) => (
                  <NavDropdown.Item href={`#/${chart.path}`}>
                    {chart.name}
                  </NavDropdown.Item>
                ))}
                <h2>TimeLinesSeries:</h2>

                {chartLine.map((chart) => (
                  <NavDropdown.Item href={`#/${chart.path}`}>
                    {chart.name}
                  </NavDropdown.Item>
                ))}
              </div>
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
