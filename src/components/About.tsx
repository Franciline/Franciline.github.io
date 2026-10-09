import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import InterestsIcon from '@mui/icons-material/Interests';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BrushIcon from '@mui/icons-material/Brush';
import '../assets/styles/About.scss';

function About() {
  return (
    <main className="about-page">
      <header className="about-page-intro">
        <span className="about-eyebrow">A little more about me</span>
        <h1 className="about-page-title">Science, creativity & curiosity.</h1>
        <p className="about-statement">Motivated to contribute to scientific progress, with a particular interest in healthcare and medicine.</p>
        <p>
          My academic work explores machine learning and artificial intelligence, including natural
          language processing and explainable systems.
        </p>
      </header>

      <section className="about-beyond">
        <h2>Beyond my studies</h2>
        <div className="about-personal-row">
          <VolunteerActivismIcon aria-hidden="true" />
          <div><h3>Volunteer Illustrator · <a href="https://alias-asso.fr" target="_blank" rel="noreferrer">ALIAS</a></h3><small>2024–Present · Sorbonne University</small><p>I create illustrations for Instagram posts promoting the student association’s events.</p></div>
        </div>
        <div className="about-personal-row">
          <BrushIcon aria-hidden="true" />
          <div><h3>Art & Animation</h3><p>2D/3D art and animation. A pencil in hand since I was five.</p></div>
        </div>
        <div className="about-personal-row">
          <InterestsIcon aria-hidden="true" />
          <div><h3>Interests</h3><p>Psychology, science fiction, crime fiction, and Asian and European cuisine.</p></div>
        </div>
      </section>
      <section className="about-languages">
        <div className="about-detail-heading"><LanguageIcon aria-hidden="true" /><h2>Languages</h2></div>
        <ul>
          <li><span>French</span><small>Native</small></li>
          <li><span>English</span><small>Proficient · C1</small></li>
          <li><span>Mandarin</span><small>Intermediate · B1</small></li>
        </ul>
      </section>
    </main>
  );
}

export default About;
