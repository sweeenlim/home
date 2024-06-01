import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fa fa-code" /> with <i className="fa fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/sweeenlim"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Swee En Lim
          </span>
        </a>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
