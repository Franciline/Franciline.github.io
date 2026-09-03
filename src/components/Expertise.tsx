import React from "react";
import Chip from '@mui/material/Chip';
import CodeIcon from '@mui/icons-material/Code';
import InsightsIcon from '@mui/icons-material/Insights';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import '../assets/styles/Expertise.scss';

const skillGroups = [
    {
        title: 'Languages & Web',
        icon: <CodeIcon />,
        skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'React', 'HTML', 'CSS / Sass'],
    },
    {
        title: 'Machine Learning & Data',
        icon: <InsightsIcon />,
        skills: ['Machine Learning', 'Data Analysis', 'Feature Engineering', 'Pandas', 'PostgreSQL'],
    },
    {
        title: 'NLP & Generative AI',
        icon: <PsychologyIcon />,
        skills: ['NLP', 'RAG', 'LLMs', 'Sentiment Analysis', 'Hugging Face', 'LangChain'],
    },
    {
        title: 'Tools & Platforms',
        icon: <BuildIcon />,
        skills: ['Git', 'GitHub', 'Docker', 'Linux', 'AWS', 'Azure'],
    },
];

function Expertise() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <article className="skill-card" key={group.title}>
                        <div className="skill-card-heading">
                            {group.icon}
                            <h2>{group.title}</h2>
                        </div>
                        <div className="skill-chips">
                            {group.skills.map((skill) => (
                                <Chip key={skill} label={skill} size="small" />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;
