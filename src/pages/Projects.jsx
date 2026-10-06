import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import ProjectGrid from '../components/ProjectGrid';
import { profile } from '../data/content';

export default function Projects() {
  return (
    <Page id="projects">
      <div className="container">
        <motion.div className="section-head" variants={rise}>
          <span className="pill">Projects</span>
          <h2>
            Projects Showcase – <span className="accent-phrase">What I've Built!</span>
          </h2>
          <p>
            Research, systems and a hackathon build — everything here was built end to end, backend through to the
            hardware where it mattered.
          </p>
        </motion.div>

        <ProjectGrid />

        <motion.div variants={rise} style={{ marginTop: 32 }}>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </Page>
  );
}
