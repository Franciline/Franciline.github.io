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
        <h2 className="about-statement">Curious about how data and AI can support meaningful work.</h2>
        <p>
          I am a master’s student in AI and Data Science at Sorbonne University. My academic work
          explores machine learning, natural language processing, and explainable systems, with a
          growing interest in healthcare applications.
        </p>
      </header>

      <div className="about-details">
        <section className="about-detail">
          <div className="about-detail-heading">
            <LanguageIcon />
            <h2>Languages</h2>
          </div>
          <ul>
            <li><span>Language one</span><small>Level to confirm</small></li>
            <li><span>Language two</span><small>Level to confirm</small></li>
            <li><span>Language three</span><small>Level to confirm</small></li>
          </ul>
        </section>

        <section className="about-detail">
          <div className="about-detail-heading">
            <InterestsIcon />
            <h2>Interests</h2>
          </div>
          <div className="interest-list">
            <span>AI for healthcare</span>
            <span>Natural language processing</span>
            <span>Add a personal interest</span>
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
            <h3>Volunteering role</h3>
            <span>Organisation · Dates</span>
          </div>
          <p>Add a short description of your contribution and its impact.</p>
        </div>
      </section>
    </main>
  );
}

export default About;
