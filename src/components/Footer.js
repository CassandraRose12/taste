import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="LinkedIn">
        <Link to="/about" >
          <LinkedInIcon />
          <GithubIcon />
        </Link>
      </div>
      <p> &copy; 2022 tastearoundtheworld.com </p>
    </div>
  );
}

export default Footer;
