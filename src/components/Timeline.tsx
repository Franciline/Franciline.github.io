import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss';

const education = [
  {
    date: '2025 - 2027',
    title: 'Master MIND/DAC',
    titleLinkText: 'MIND/DAC',
    titleLink: 'https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-mind',
    institution: 'Sorbonne University, Paris, France',
    description: 'AI, Machine Learning, Deep Learning, Natural Language Processing.',
  },
  { date: '2022 - 2025', title: 'Bachelor Computer Science', institution: 'Sorbonne University, Paris, France' },
];

const internships = [
  { date: 'Jul. 2026 - Present', title: 'Research Intern NLP', institution: 'Tsukuba University, Ibaraki, Japan', description: 'NLP, LLM, and emotion-cause extraction from breast cancer narratives.' },
  { date: 'Jul. 2025 - Aug. 2025', title: 'Data Science Intern', institution: 'LIP6 - SU, Paris, France', description: 'Machine learning prediction of companies’ carbon footprint emissions.' },
];

type TimelineItem = {
  date: string;
  title: string;
  titleLinkText?: string;
  titleLink?: string;
  institution: string;
  description?: string;
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
          <TimelineColumn id="education" title="Education" items={education} category="education" />
          <TimelineColumn id="internships" title="Internships" items={internships} category="internship" />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
