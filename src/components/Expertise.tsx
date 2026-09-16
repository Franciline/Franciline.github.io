import React from "react";
import Chip from '@mui/material/Chip';
import CodeIcon from '@mui/icons-material/Code';
import InsightsIcon from '@mui/icons-material/Insights';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import '../assets/styles/Expertise.scss';

const skillGroups = [
    {
        title: 'Machine Learning & AI',
        icon: <InsightsIcon />,
        skills: [
            'Machine Learning',
            'Deep Learning',
            'Reinforcement Learning',
            'Symbolic AI & Logic-Based Reasoning',
            'Data Analysis',
        ],
    },
    {
        title: 'NLP & Knowledge Systems',
        icon: <PsychologyIcon />,
        skills: [
            'Natural Language Processing (NLP)',
            'Information Retrieval',
            'Large Language Models (LLMs)',
            'Retrieval-Augmented Generation (RAG)',
            'Knowledge Graphs',
        ],
    },
    {
        title: 'Frameworks & Libraries',
        icon: <BuildIcon />,
        skills: ['HuggingFace', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
    },
    {
        title: 'Programming & Tools',
        icon: <CodeIcon />,
        skills: ['Python', 'C', 'Git', 'Jupyter', 'Linux', 'Bash'],
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
