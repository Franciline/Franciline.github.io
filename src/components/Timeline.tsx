import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss';

const education = [
  {
    date: '2025 - 2027',
    title: 'Master’s Degree in Computer Science - MIND',
    titleLinkText: 'MIND',
    titleLink: 'https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-mind',
    institution: 'Sorbonne University, Paris, France',
    description: 'Parcours Machine Learning, INtelligence artificielle et Données.',
  },
  {
    date: '2022 - 2025',
    title: 'Bachelor’s Degree in Computer Science - Intensive Track',
    institution: 'Sorbonne University, Paris, France',
    description: 'Intensive computer science program with additional mathematics coursework and a focus on data science, machine learning, and AI.',
  },
];

const internships = [
  {
    date: 'Jul. 2026 - Aug. 2026',
    title: 'NLP Research Intern',
    institution: 'University of Tsukuba, Ibaraki, Japan',
    highlights: [
      'Developed a data collection and preprocessing pipeline for longitudinal patient narratives.',
      'Designed annotation guidelines and prompting strategies for emotion-cause extraction.',
      'Built an automated framework to benchmark multiple open-weight LLMs and conducted systematic error analysis to compare performance and identify extraction limitations.',
    ],
  },
  {
    date: 'Jul. 2025 - Aug. 2025',
    title: 'Data Science Intern',
    institution: 'LIP6 - Sorbonne University, Paris, France',
    highlights: [
      'Cleaned, preprocessed, and explored corporate carbon-footprint data through statistical analysis and visualization.',
      'Developed classification and regression models to support carbon-emissions estimation and compared their performance using task-appropriate metrics.',
      'Synthesized findings into structured reports and presented the results to stakeholders.',
    ],
  },
];

type TimelineItem = {
  date: string;
  title: string;
  titleLinkText?: string;
  titleLink?: string;
  institution: string;
  description?: string;
  highlights?: string[];
};

function TimelineColumn({ id, title, items, category }: { id: string; title: string; items: TimelineItem[]; category: 'education' | 'internship' }) {
  const icon = category === 'education' ? faGraduationCap : faBriefcase;

  return (
    <section className={`timeline-column timeline-column--${category}`} id={id}>
      <div className="timeline-heading">
        <FontAwesomeIcon icon={icon} />
        <h2>{title}</h2>
      </div>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-card" key={`${item.date}-${item.title}`}>
            <span className="timeline-marker" aria-hidden="true" />
            <p className="timeline-date">{item.date}</p>
            <h3>
              {item.titleLink && item.titleLinkText ? (
                <>
                  {item.title.split(item.titleLinkText)[0]}
                  <a href={item.titleLink} target="_blank" rel="noreferrer">{item.titleLinkText}</a>
                  {item.title.split(item.titleLinkText)[1]}
                </>
              ) : item.title}
            </h3>
            <h4>{item.institution}</h4>
            {item.description && <p>{item.description}</p>}
            {item.highlights && (
              <ul className="timeline-highlights">
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <div id="background">
      <div className="items-container background-container">
        <h1>Background</h1>
        <div className="timeline-grid">
          <TimelineColumn id="internships" title="Internships" items={internships} category="internship" />
          <TimelineColumn id="education" title="Education" items={education} category="education" />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
