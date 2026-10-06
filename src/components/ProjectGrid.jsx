import { motion } from 'framer-motion';
import { rise } from './Page';
import { projects } from '../data/content';

function LinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return <i className="fa-brands fa-github" />;
}

// 2-column glass-card grid, modeled on aakarsh-devhq's project showcase:
// tag pill, date, title, description, and link buttons — no rail, no
// click-to-expand, everything visible at once.
export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((p) => (
        <motion.article className="project-card" key={p.id} variants={rise}>
          <div className="project-card__top">
            <span className="tag">{p.eyebrow}</span>
            <span className="project-card__date">{p.year}</span>
          </div>

          <h3>{p.title}</h3>
          <p>{p.blurb}</p>

          <div className="tag-row project-card__stack">
            {p.stack.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>

          {p.links.length > 0 && (
            <div className="project-card__links">
              {p.links.map((l) => (
                <a className="project-card__btn" key={l.url} href={l.url} target="_blank" rel="noreferrer">
                  {l.label.toLowerCase() === 'github' ? <GithubIcon /> : <LinkIcon />}
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );
}
