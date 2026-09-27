import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Collaborator = {
  name: string;
  linkedinUrl: string;
};

export type ProjectDetails = {
  title: string;
  date?: string;
  summary: string;
  description: string;
  keyResults?: string[];
  keyResultsTitle?: string;
  skills: string[];
  collaborators?: Collaborator[];
  reportUrl?: string;
  reportPreview?: string;
  repositoryUrl?: string;
  placeholderPreview?: boolean;
};

function ProjectShowcase({ projects, mode }: { projects: ProjectDetails[]; mode: string }) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <>
      <div className="projects-grid">
        {projects.map((project) => (
          <button
            className="project-card"
            key={project.title}
            type="button"
            onClick={() => setSelectedProject(project)}
            aria-label={`Open details for ${project.title}`}
          >
            {(project.reportPreview || project.placeholderPreview) && (
              <div
                className={`project-report-thumbnail${project.placeholderPreview ? ' project-placeholder-thumbnail' : ''}`}
                role={project.placeholderPreview ? 'img' : undefined}
                aria-label={project.placeholderPreview ? `Image placeholder for ${project.title}` : undefined}
              >
                {project.reportPreview && (
                  <img src={project.reportPreview} alt={`Preview page from the ${project.title} report`} loading="lazy" />
                )}
              </div>
            )}
            <div className="project-card-header">
              <h2>{project.title}</h2>
              {project.date && <span className="project-date">{project.date}</span>}
            </div>
            <p>{project.summary}</p>
            <div className="project-skills" aria-label="Skills used">
              {project.skills.map((skill) => <Chip key={skill} label={skill} size="small" />)}
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        fullWidth
        maxWidth="md"
        aria-labelledby="project-dialog-title"
        PaperProps={{ className: `project-dialog project-dialog--${mode}` }}
      >
        {selectedProject && (
          <DialogContent>
            <div className="project-dialog-header">
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              {selectedProject.date && <span>{selectedProject.date}</span>}
            </div>
            <div className="project-dialog-top">
              {selectedProject.reportPreview && (
                <a
                  className="project-report-preview"
                  href={selectedProject.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open the full report for ${selectedProject.title}`}
                >
                  <img src={selectedProject.reportPreview} alt={`Preview page from the ${selectedProject.title} report`} />
                </a>
              )}
              {!selectedProject.reportPreview && (
                <div className="project-report-placeholder" role="img" aria-label="Report not available">
                  <span>Report not available</span>
                </div>
              )}
              <div className="project-dialog-sidebar">
                <section>
                  <h3>Keywords</h3>
                  <div className="project-skills">
                    {selectedProject.skills.map((skill) => <Chip key={skill} label={skill} />)}
                  </div>
                </section>
                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                  <section>
                    <h3>Collaborators</h3>
                    <div className="project-collaborators">
                      {selectedProject.collaborators.map((collaborator) => (
                        <a
                          key={collaborator.name}
                          href={collaborator.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkedInIcon />
                          {collaborator.name}
                        </a>
                      ))}
                    </div>
                  </section>
                )}
                {(selectedProject.reportUrl || selectedProject.repositoryUrl) && (
                  <section className="project-resources">
                    <h3>Resources</h3>
                    <div className="project-resource-links">
                      {selectedProject.reportUrl && (
                        <a className="project-resource-link" href={selectedProject.reportUrl} target="_blank" rel="noreferrer">
                          View full report
                        </a>
                      )}
                      {selectedProject.repositoryUrl && (
                        <a className="project-resource-link project-code-link" href={selectedProject.repositoryUrl} target="_blank" rel="noreferrer">
                          <GitHubIcon />
                          View code
                        </a>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
            <div className="project-dialog-description">
              <h3>Overview</h3>
              <p>{selectedProject.description}</p>
              {selectedProject.keyResults && selectedProject.keyResults.length > 0 && (
                <section className="project-key-results">
                  <h3>{selectedProject.keyResultsTitle || 'Key results'}</h3>
                  <ul>
                    {selectedProject.keyResults.map((result, index) => (
                      <li key={`${selectedProject.title}-result-${index}`}>{result}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

export default ProjectShowcase;
