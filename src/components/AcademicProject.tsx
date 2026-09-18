import React from "react";
import ProjectShowcase, { ProjectDetails } from './ProjectShowcase';
import '../assets/styles/Project.scss';

const academicProjects: ProjectDetails[] = [
    {
        title: 'RAG Implementation for LIP6',
        date: '2026',
        summary: 'Implemented a retrieval-augmented generation system for LIP6 at Sorbonne University.',
        description: 'Designed and implemented a retrieval-augmented generation pipeline for LIP6 at Sorbonne University, combining document retrieval with language-model generation to produce responses grounded in relevant source material.',
        skills: ['RAG', 'NLP', 'LLMs'],
        collaborators: [
            { name: 'Paul Beglin', linkedinUrl: 'https://www.linkedin.com/in/paulbeglin/' },
            { name: 'Ekaterina Bogush', linkedinUrl: 'https://www.linkedin.com/in/ekaterina-bogush-42a415250/' },
        ],
        placeholderPreview: true,
    },
    {
        title: 'BirdCLEF Species Classification',
        date: '2026',
        summary: 'Explored animal audio and classified species using traditional machine-learning methods.',
        description: 'Analyzed audio from the BirdCLEF 2026 dataset and developed a species-classification approach. The project deliberately excluded deep-learning models, focusing instead on audio feature extraction and traditional machine-learning techniques.',
        skills: ['Audio Analysis', 'Machine Learning', 'Feature Engineering'],
        collaborators: [
            { name: 'Alan Tambellini', linkedinUrl: 'https://www.linkedin.com/in/alan-tambellini/' },
        ],
        reportUrl: '/reports/BirdClef.pdf',
        reportPreview: '/reports/birdclef-preview.png',
        repositoryUrl: 'https://github.com/Franciline/ML_project',
    },
    {
        title: 'Sentiment and Speech Classification',
        date: '2026',
        summary: 'Applied NLP methods to movie-review sentiment and narrator classification tasks.',
        description: 'Built classification pipelines for two language-related tasks: identifying sentiment in movie reviews and classifying narrators from speech. The project explored how textual and speech-derived features can support supervised classification.',
        skills: ['NLP', 'Sentiment Analysis', 'Classification'],
        collaborators: [
            { name: 'Alan Tambellini', linkedinUrl: 'https://www.linkedin.com/in/alan-tambellini/' },
        ],
        reportUrl: '/reports/Sentiment.pdf',
        reportPreview: '/reports/sentiment-preview.png',
        repositoryUrl: 'https://github.com/alan-man/tal-projet',
    },
    {
        title: 'Explainable Board-Game Recommendation System',
        date: '2025',
        summary: 'Compared recommendation techniques with an emphasis on explaining their suggestions.',
        description: 'Built a recommendation system for board games and explored multiple recommendation approaches. Particular attention was given to explainability: understanding and communicating why specific games were recommended to a user.',
        skills: ['Recommender Systems', 'Explainable AI', 'Data Analysis'],
        collaborators: [
            { name: 'Ekaterina Bogush', linkedinUrl: 'https://www.linkedin.com/in/ekaterina-bogush-42a415250/' },
            { name: 'Lyna Combo', linkedinUrl: 'https://www.linkedin.com/in/lyna-combo-9b7a5b275/' },
        ],
        reportUrl: '/reports/RecSys.pdf',
        reportPreview: '/reports/recsys-preview.png',
        repositoryUrl: 'https://github.com/Franciline/Recommendation_system',
    },
];

function AcademicProject({ mode }: { mode: string }) {
    return (
    <div className="projects-container" id="academic-project">
        <h1>Academic Projects</h1>
        <ProjectShowcase projects={academicProjects} mode={mode} />
    </div>
    );
}

export default AcademicProject;
