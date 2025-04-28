import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Aryan100604" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aryan-roy717/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A Portfolio built by Aryan Roy</p>
    </footer>
  );
}

export default Footer;