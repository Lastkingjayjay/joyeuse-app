import { Nav } from "react-bootstrap";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import fBook from "./fbook.png";
import vid1 from "./src/videoBg.mp4";
function App() {
  return (
    <>
      <Navbar bg="myRebcapur" variant="dark">
        <Navbar.Brand href="#home">
          <img src={fBook} />
          Joyeuse Bakery
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Menue</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container">
        Store Location
        <br />
        <iframe
          title="My Daily Marathon Tracker"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.8845988262233!2d-75.11833048564542!3d40.03335588679184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7a9d6185ced%3A0x8aa1795656f9e8ee!2sJoyeuse%20Bakery%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1656032085964!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default App;
