import Logo from "../images/logo.PNG";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbarh = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg home-navbar  ">
        <div class="container ">
          <a class="navbar-brand me-2" href="/">
            <img
              src={Logo}
              width={270}
              height={70}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px", lineHeight: "120px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div className="nb-text">
            <div class="collapse navbar-collapse" id="navbarButtonsExample">
              <div className="navbar-text-colour"></div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Store
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    Rtailers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contactus">
                    Brands
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="courses">
                    Deals
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="fee">
                    Fee Plan's
                  </a>
                </li>
              </ul>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              <div class="d-flex align-items-center">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbarh;
