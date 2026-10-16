import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss';

const education = [
  {
    date: '2025-2027 (expected)',
    logo: '/logos/sorbonne.png',
    title: 'Master’s Degree in Computer Science - MIND',
    titleLinkText: 'MIND',
    titleLink: 'https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-mind',
    institution: 'Sorbonne University, Paris, France',
    description: 'Parcours Machine Learning, INtelligence artificielle et Données (MIND).',
    distinction: 'First year: ranked 3rd out of 34 - High honors.',
  },
  {
    date: '2022 - 2025',
    logo: '/logos/sorbonne.png',
    title: 'Bachelor’s Degree in Computer Science - Intensive Track',
    institution: 'Sorbonne University, Paris, France',
    description: 'Intensive computer science program with additional mathematics coursework and a focus on data science, machine learning, and AI.',
    distinction: 'Ranked 4th out of 217 - High honors.',
  },
  {
    date: '2019 - 2022',
    title: 'French Baccalaureate - Mathematics & Computer Science',
    institution: 'Externat Saint Joseph de Cluny, Cayenne, French Guiana',
    distinction: 'Highest honors with jury commendation.',
  },
];

const internships = [
  {
    date: 'Jul. 2026 - Aug. 2026',
    logo: '/logos/kalclab.png',
    title: 'NLP Research Intern | LLM Evaluation for Patient Narratives',
    institution: 'KaLC Lab - University of Tsukuba, Ibaraki, Japan',
    description: 'Studied emotion-cause extraction from patient narratives, with potential applications in understanding and monitoring patients’ experiences during treatment. The work also aimed to establish a standardized dataset and evaluation framework for research.',
    highlights: [
      <>Built a privacy-aware collection and preprocessing pipeline for <strong>18 breast cancer patient blogs and 2,500+ posts</strong> across two platforms, following scraping policies.</>,
      <>Iteratively refined emotion-cause annotation guidelines across three versions and curated a <strong>147-pair reference set</strong>.</>,
      'Designed prompting strategies and evaluated zero-shot emotion-cause extraction with GPT-OSS, Qwen 3.6, and Gemma 4, using a proprietary model as a performance reference.',
      'Developed an automated evaluation framework combining ROUGE-L, sentence-embedding cosine similarity, and Hungarian matching.',
      'Conducted systematic error analysis to compare model performance and identify extraction limitations.',
    ],
  },
  {
    date: 'Jun. 2025 - Jul. 2025',
    logo: '/logos/lip6.png',
    title: 'Data Science Intern | ML for Carbon-Footprint Estimation',
    institution: 'LIP6 - Sorbonne University, Paris, France',
    description: <>In collaboration with <a href="https://abc-transitionbascarbone.fr" target="_blank" rel="noreferrer">Association pour la transition Bas Carbone (ABC)</a>, explored explainable machine learning to estimate corporate carbon footprints and help companies better understand their emissions.</>,
    highlights: [
      <>Cleaned, preprocessed, and analyzed <strong>2,029 corporate carbon-footprint records across 137 features</strong>, including missing-value handling, statistical analysis, and visualization.</>,
      <>Developed and compared classification, regression, and <strong>Bayesian-network models</strong> across feature-encoding strategies, evaluating performance using task-appropriate metrics.</>,
      <>Applied <strong>Bayesian networks</strong> and introduced <strong>SHALL</strong> analysis to detect outliers and generate exploratory data, contributing to the open-source library <a href="https://pyagrum.readthedocs.io/en/3.2.1/" target="_blank" rel="noreferrer"><strong>PyAgrum</strong></a>.</>,
      <>Delivered structured technical reports and presented findings to <strong>10+ domain experts</strong>.</>,
    ],
  },
];

type TimelineItem = {
  date: string;
  title: string;
  titleLinkText?: string;
  titleLink?: string;
  institution: string;
  logo?: string;
  description?: React.ReactNode;
  distinction?: string;
  highlights?: React.ReactNode[];
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
            <div className="timeline-entry-content">
            <div className="timeline-entry-heading">
            {item.logo && <img className="timeline-logo" src={item.logo} alt={`${item.institution} logo`} loading="lazy" />}
            <div>
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
            </div>
            </div>
            {item.description && <p className="timeline-description">{item.description}</p>}
            {item.distinction && <p className="timeline-distinction">{item.distinction}</p>}
            {item.highlights && (
              <ul className="timeline-highlights">
                {item.highlights.map((highlight, index) => <li key={`${item.title}-${index}`}>{highlight}</li>)}
              </ul>
            )}
            </div>
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
