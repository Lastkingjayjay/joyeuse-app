import { Nav } from "react-bootstrap";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import fBook from "./fbook.png";
import Main from "./Main";
import Contact from "./Contact";
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import your route components too
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="myRebcapur" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <img src={fBook} alt="facebook" />
            Joyeuse Bakery
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Main">
              Menue
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
        <div>
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
