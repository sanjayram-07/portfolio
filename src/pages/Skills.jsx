import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import SkillsGrid from '../components/SkillsGrid';

export default function Skills() {
  return (
    <Page id="skills">
      <div className="container">
        <motion.div className="section-head" style={{ textAlign: 'center' }} variants={rise}>
          <span className="pill">Skills</span>
          <h2>
            Technical Skills – <span className="accent-phrase">Core Expertise!</span>
          </h2>
          <p style={{ margin: '0 auto' }}>
            Languages, frameworks and tools I reach for day to day — filter by category or see everything at once.
          </p>
        </motion.div>

        <SkillsGrid />
      </div>
    </Page>
  );
}
