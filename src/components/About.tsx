import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import InterestsIcon from '@mui/icons-material/Interests';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import '../assets/styles/About.scss';

function About() {
  return (
    <main className="about-page">
      <header className="about-page-intro">
        <h1 className="about-page-title">About me</h1>
        <h2 className="about-statement">Motivated to tackle global challenges and contribute to scientific progress, with a particular interest in healthcare and medicine.</h2>
        <p>
          My academic work explores machine learning and artificial intelligence, including natural
          language processing and explainable systems.
        </p>
      </header>

      <div className="about-details">
        <section className="about-detail">
          <div className="about-detail-heading">
            <LanguageIcon />
            <h2>Languages</h2>
          </div>
          <ul>
            <li><span>French</span><small>Native</small></li>
            <li><span>English</span><small>Fluent · C1</small></li>
            <li><span>Mandarin Chinese</span><small>Intermediate · B1</small></li>
          </ul>
        </section>

        <section className="about-detail">
          <div className="about-detail-heading">
            <InterestsIcon />
            <h2>Interests</h2>
          </div>
          <div className="interest-list">
            <span>Arts and drawing</span>
            <span>Cooking</span>
            <span>Human psychology</span>
          </div>
        </section>
      </div>

      <section className="about-detail volunteering-section">
        <div className="about-detail-heading">
          <VolunteerActivismIcon />
          <h2>Volunteering</h2>
        </div>
        <div className="volunteering-example">
          <div>
            <h3>Illustrator</h3>
            <span>
              <a href="https://alias-asso.fr" target="_blank" rel="noreferrer">ALIAS</a>{' '}
              · 2024–2026
            </span>
          </div>
          <p>
            Volunteer illustrator for the <strong>A</strong>ssociation <strong>L</strong>udique et{' '}
            <strong>I</strong>nform<strong>A</strong>tique de <strong>S</strong>orbonne université (ALIAS). I create
            illustrations for Instagram posts promoting the association’s events.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
