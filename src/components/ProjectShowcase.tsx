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
            <p>{selectedProject.description}</p>
            <h3>Skills and methods</h3>
            <div className="project-skills">
              {selectedProject.skills.map((skill) => <Chip key={skill} label={skill} />)}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

export default ProjectShowcase;
