import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="female-avatar.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/franciline" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/amélie-chu-123101233" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Amélie Chu</h1>
          <p>Master’s student in AI and Data Science at Sorbonne University, seeking a 5-6 months internship starting in March 2027 to apply AI to healthcare and medical challenges.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/franciline" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/amélie-chu-123101233" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
