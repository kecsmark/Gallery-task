import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav style={{}} variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link>
          <Link
            style={{
              textDecoration: "none",
              color: "brown",
            }}
            to="/"
          >
            Home
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link
            style={{
              textDecoration: "none",
              color: "brown",
            }}
            to="/gallery"
          >
            Gallery
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link
              style={{
                textDecoration: "none",
                color: "brown",
              }}
              to="/favorites"
            >
              Favorites
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav.Item>
    </Nav>
  );
}
