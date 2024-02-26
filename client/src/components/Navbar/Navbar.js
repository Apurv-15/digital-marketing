import { useRef, Link } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Signup from "../Signup/Signup";
import "./NavBar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>KAHANIKARS</h3>
      <nav ref={navRef}>
        <a href="/#">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
          Our Work
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: "8px" }} />
          Strategies
        </a>
        <a href="./Service">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
          Services
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
          Contact Us
        </a>
        <a
          className="facebook"
          href="https://www.facebook.com/profile.php?id=100083795178955&locale2=hi_IN&paipv=0&eav=AfblL-haEe-Uzy--wp4EcAJInP1HjWQzmm2Ai1Lx5Dggj--fbtYOB_0Diyk3ZZahB88&_rdr"
          target="_thapa"
        >
          <FaFacebookSquare className="facebook" />
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/kahanikars/"
          target="_thapa"
        >
          <FaInstagramSquare className="instagram" />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/sujith-panicker-504707203/?originalSubdomain=in"
          target="_thapa"
        >
          <FaLinkedinIn className="likedin" />
        </a>
        {/* <div>
        
          <Link to="/Signup" className="login">
            Login/SignUp
          </Link>
        </div> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
