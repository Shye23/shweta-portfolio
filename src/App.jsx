import { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Terminal,
  UserRound,
} from 'lucide-react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import { personalInfo, quickFacts } from './data/profile';
import { skillGroups } from './data/skills';
import { projects, projectFilters } from './data/projects';
import { experiences } from './data/experience';
import { certifications } from './data/certifications';
const App = () => {
  const [theme, setTheme] = useState('light');
  const [activeFilter, setActiveFilter] = useState('All');
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className={`app-shell ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <section id="home" className="hero-section container">
          <div className="hero-copy">
            <p className="hero-kicker">{personalInfo.name}</p>
            <h1>AI & Data Science Engineering Student</h1>
            <p className="hero-text">
              Building practical AI and data-driven systems with machine learning, computer vision,
              and backend technologies.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href={resumeUrl} className="secondary-btn" target="_blank" rel="noreferrer" download>
                <Download size={18} />
                Download Resume
              </a>
            </div>
            <div className="social-row">
              <a href={personalInfo.github} aria-label="GitHub profile" target="_blank" rel="noreferrer">
                <GitBranch size={18} />
              </a>
              <a href={personalInfo.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
                <UserRound size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email address">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Areas of focus">
            <p className="hero-panel__label">Current focus</p>
            <div className="focus-list">
              <div><Code2 size={18} /><span>Machine learning</span></div>
              <div><Terminal size={18} /><span>Computer vision</span></div>
              <div><GitBranch size={18} /><span>Backend and APIs</span></div>
            </div>
            <div className="hero-panel__rule" />
            <p className="hero-panel__note">{personalInfo.availability}</p>
          </aside>
        </section>

        <section id="about" className="section container">
          <SectionHeading
            eyebrow="About"
            title="Building practical AI and data solutions"
            description="I am an AI & Data Science engineering student interested in solving practical problems using machine learning, computer vision, data analysis, backend development, and intelligent systems."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I enjoy taking projects from data preprocessing and model development through backend
                and API integration. My focus is on building systems that are useful,
                understandable, and grounded in real-world problem solving.
              </p>
              <p>
                My interests include machine learning, computer vision, data science, software
                engineering, and QA automation. I like working across the stack, from data pipelines
                to interfaces and model evaluation.
              </p>
            </div>

            <div className="quick-facts">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-item">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Skills"
              title="Tools I use across AI, data, and development"
              description="Organized around the tools and areas I work with most often in projects and coursework."
            />

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.items.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionHeading
            eyebrow="Projects"
            title="Selected technical projects"
            description="Applied AI, data science, computer vision, and backend work."
          />

          <div className="filter-bar" aria-label="Project categories">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Experience & Technical Work"
              title="Technical experience"
              description="Focused on practical student-driven engineering work, applied ML, and backend/API development."
            />

            <div className="experience-list">
              {experiences.map((item, index) => (
                <div key={item.title} className="experience-item">
                  <div className="experience-marker">0{index + 1}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section container">
          <SectionHeading
            eyebrow="Certifications & Learning"
            title="Certifications and coursework"
            description="Selected learning across cloud, development, and data-focused areas."
          />

          <div className="cert-grid">
            {certifications.map((cert) => {
              const isValidUrl = cert.url?.startsWith('http');
              const content = (
                <>
                  <span className="cert-year">{cert.year}</span>
                  <h3>{cert.name}</h3>
                  <p>{cert.provider}</p>
                </>
              );

              return isValidUrl ? (
                <a key={cert.name} href={cert.url} className="cert-card" target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={cert.name} className="cert-card">
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Education"
              title="Bachelor of Technology in AI & Data Science"
              description="K.K. Wagh Institute of Engineering Education & Research, Nashik."
            />

            <div className="education-card">
              <div className="education-header">
                <GraduationCap size={20} />
                <div>
                  <h3>K.K. Wagh Institute of Engineering Education & Research, Nashik</h3>
                  <p>B.Tech in Artificial Intelligence & Data Science</p>
                </div>
              </div>

              <div className="education-meta">
                <div>
                  <span>Academic status</span>
                  <strong>Final-year engineering student</strong>
                </div>
                <div>
                  <span>CGPA</span>
                  <strong>8.83</strong>
                </div>
              </div>

              <div className="education-scores">
                <span>10th: 95%</span>
                <span>12th: 75%</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section section-alt">
          <div className="container contact-grid">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Open to technical opportunities"
                description="I am open to internships, technical roles, and collaborative project discussions."
              />

              <div className="contact-details">
                <p><Mail size={16} /><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
                <p><GitBranch size={16} /><a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a></p>
                <p><UserRound size={16} /><a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
                <p><MapPin size={16} /> Nashik, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-action-panel">
              <Mail size={22} aria-hidden="true" />
              <h3>Start a conversation</h3>
              <p>For a quick response, send me an email with a little context about your opportunity or project.</p>
              <a href={`mailto:${personalInfo.email}`} className="primary-btn">
                Email {personalInfo.name.split(' ')[0]}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>Shweta Sanjay Yeola</h3>
            <p>AI & Data Science Engineering Student</p>
          </div>

          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Shweta Yeola</div>
      </footer>
    </div>
  );
};

export default App;
