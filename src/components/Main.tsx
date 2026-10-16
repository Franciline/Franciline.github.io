import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/profile.jpg" alt="Amélie Chu" />
        </div>
        <div className="content">
          <h1>Amélie Chu</h1>
          <p>Master’s student in AI and Data Science at Sorbonne University</p>
          <p className="hero-introduction">My work explores machine learning, natural language processing, and explainable AI, with a particular interest in healthcare and medicine. I’m seeking a 5-6 month internship starting in March 2027 to apply my knowledge to real-world challenges.</p>
          <a className="hero-about-link" href="#/about">More about me →</a>

          <div className="social_icons">
            <a href="https://github.com/franciline" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amelie-chu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/franciline" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amelie-chu" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
