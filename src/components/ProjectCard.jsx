import { ArrowUpRight, GitBranch } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const getLink = (url) => (typeof url === 'string' ? url.trim() : '');
  const githubUrl = getLink(project.github);
  const demoUrl = getLink(project.demo);

  return (
    <article className="project-card" aria-label={project.title}>
      <div className="project-card__top">
        <span className="project-category">{project.category}</span>
        <div className="project-actions">
          {githubUrl.startsWith('http') && (
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`} className="project-link project-link--ghost">
              <GitBranch size={16} />
              Code
            </a>
          )}
          {demoUrl.startsWith('http') && (
            <a href={demoUrl} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="project-link">
              Demo
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <details className="project-details">
        <summary>Project notes</summary>
        <div>
          <p><strong>Problem:</strong> {project.problem}</p>
          <p><strong>Technical contribution:</strong> {project.contribution}</p>
          <p><strong>Result:</strong> {project.result}</p>
        </div>
      </details>
    </article>
  );
};

export default ProjectCard;
