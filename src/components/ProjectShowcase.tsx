import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export type ProjectDetails = {
  title: string;
  date?: string;
  summary: string;
  description: string;
  skills: string[];
  reportUrl?: string;
  reportPreview?: string;
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
            {project.reportPreview && (
              <div className="project-report-thumbnail">
                <img src={project.reportPreview} alt={`Preview page from the ${project.title} report`} loading="lazy" />
                <span>Report available</span>
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
            <div className={selectedProject.reportPreview ? 'project-dialog-layout' : undefined}>
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
              <div>
                <p>{selectedProject.description}</p>
                <h3>Skills and methods</h3>
                <div className="project-skills">
                  {selectedProject.skills.map((skill) => <Chip key={skill} label={skill} />)}
                </div>
                {selectedProject.reportUrl && (
                  <a className="project-report-link" href={selectedProject.reportUrl} target="_blank" rel="noreferrer">
                    View full report
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

export default ProjectShowcase;
