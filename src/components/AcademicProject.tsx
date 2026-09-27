import React from "react";
import ProjectShowcase, { ProjectDetails } from './ProjectShowcase';
import '../assets/styles/Project.scss';

const academicProjects: ProjectDetails[] = [
    {
        title: 'Local RAG Chatbot for LIP6',
        date: '2026',
        summary: 'Developed a fully local RAG chatbot for the LIP6 institutional website.',
        description: 'Developed a fully local, end-to-end RAG chatbot for the LIP6 institutional website, covering data ingestion, retrieval, generation, evaluation, and serving. The system processes heterogeneous HTML and PDF content, structures and indexes it locally, retrieves relevant sources through hybrid dense and sparse search, and generates cited answers using locally hosted open-weight LLMs.',
        keyResultsTitle: 'Approach & Results',
        keyResults: [
            'Conducted a literature review of state-of-the-art RAG architectures and built a fully local pipeline for ingesting, structuring, and retrieving information from LIP6 HTML and PDF content.',
            'Implemented hybrid retrieval by combining dense search with Qdrant, sparse search with FTS5, and reciprocal rank fusion.',
            'Compared chunking strategies, embedding models, retrieval configurations, and locally hosted LLMs, and deployed ingestion and inference on an NVIDIA DGX Spark.',
            'Evaluated retrieval quality, latency, and citation accuracy using external benchmarks and a curated Golden Questions dataset.',
            'On a 79-question robustness benchmark, achieved 86.1% Recall@10 and 77.2% Hit@5 across challenging real-world queries.',
            '72.6% of generated answers cited the expected source, while 78.5% included at least one citation.',
        ],
        skills: ['RAG', 'LLMs', 'Information Retrieval', 'Hybrid Search', 'Embeddings', 'Vector Databases', 'NLP'],
        collaborators: [
            { name: 'Paul Beglin', linkedinUrl: 'https://www.linkedin.com/in/paulbeglin/' },
            { name: 'Ekaterina Bogush', linkedinUrl: 'https://www.linkedin.com/in/ekaterina-bogush-42a415250/' },
        ],
        placeholderPreview: true,
    },
    {
        title: 'BirdCLEF+ 2026 - Bioacoustic Species Classification',
        date: '2026',
        summary: 'Developed a classical machine-learning pipeline for bioacoustic species classification.',
        description: 'Developed a classical machine-learning pipeline to identify animal species from audio recordings and noisy, multi-species soundscapes. The task covered more than 200 species, severe class imbalance, and both single-label and multi-label classification. Under the constraint of not using deep-learning models, the project focused on handcrafted audio features and traditional machine-learning methods.',
        keyResultsTitle: 'Approach',
        keyResults: [
            'Engineered a 490-dimensional audio representation combining MFCC-based and spectral features with statistical summaries.',
            'Addressed rare species and heterogeneous recordings through normalization, duration handling, and targeted audio augmentation.',
            'Compared Logistic Regression, SVC, and XGBoost using One-vs-Rest classification, cross-validation, and hyperparameter tuning.',
            'Implemented whole-recording feature aggregation and examined alternative strategies, including overlapping five-second chunk classification, for better capturing temporal information under additional time and computational resources.',
        ],
        skills: ['Audio Classification', 'Machine Learning', 'Multi-label Classification', 'Signal Processing', 'One-vs-Rest', 'Feature Engineering', 'Data Augmentation', 'Class Imbalance'],
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
        summary: 'Built NLP pipelines for speaker identification and movie-review sentiment classification.',
        description: 'Built and evaluated NLP pipelines for two binary text-classification tasks: speaker identification from French presidential speeches (Chirac vs. Mitterrand) and sentiment classification of English movie reviews. The project compared text preprocessing, representations, classical machine learning, recurrent networks, and transformer-based models, exploring how textual and sequential features support supervised classification.',
        keyResultsTitle: 'Approach & Results',
        keyResults: [
            'Analyzed vocabulary, class distributions, and topics using EDA, LDA, and LSA.',
            'Compared BoW, TF-IDF, Word2Vec, FastText, Doc2Vec, and E5 embeddings with classical classifiers.',
            'Evaluated bidirectional GRU/LSTM architectures and fine-tuned CamemBERT, BERT, and RoBERTa models.',
            'Explored sequential post-processing for speaker predictions; transformers raised F1 from 0.62 to 0.81 for speaker identification and from 0.81 to 0.90 for sentiment classification.',
        ],
        skills: ['NLP', 'Text Classification', 'Sentiment Analysis', 'Topic Modeling', 'Text Embeddings', 'Classical ML', 'RNNs', 'Transformers', 'Fine-tuning'],
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
        summary: 'Developed explainable board-game recommendations from ratings, reviews, and game descriptions.',
        description: 'Developed an explainable recommendation system for board games using TricTrac user ratings, reviews, and game descriptions. The project compared collaborative-filtering and content-based approaches, then used NLP to make recommendations more interpretable through cluster explanations and personalized, review-style recommendations.',
        keyResultsTitle: 'Approach & Results',
        keyResults: [
            'Compared k-NN collaborative-filtering variants on a 98.1% sparse user-item matrix, using rating centering and distance weighting and evaluating performance with RMSE and MAE.',
            'Applied NNMF for dimensionality reduction and interpretable latent-factor extraction, selecting 20 factors through cross-validation.',
            'Grouped 2,614 games into 30 clusters using K-means and visualized their structure with t-SNE.',
            'Explained clusters using game-description embeddings, frequent bigrams, and LLM-generated summaries.',
            'Generated recommendation explanations from approximately 96,000 reviews using TF-IDF, n-grams, and sentence embeddings.',
        ],
        skills: ['Recommender Systems', 'Explainable AI', 'Collaborative Filtering', 'Matrix Factorization', 'Clustering', 'NLP', 'Text Embeddings', 'LLMs'],
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
        <header className="projects-section-heading">
            <h1>Academic Projects</h1>
            <p>Featured work</p>
        </header>
        <ProjectShowcase projects={academicProjects} mode={mode} />
    </div>
    );
}

export default AcademicProject;
