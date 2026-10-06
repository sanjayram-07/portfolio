import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import Timeline from '../components/Timeline';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Page id="experience">
      <div className="container">
        <motion.div className="section-head" variants={rise}>
          <span className="pill">Experience</span>
          <h2>Where I've worked</h2>
          <p>Production AI automation, a live database migration, and an incoming software engineering role.</p>
        </motion.div>

        <motion.div variants={rise}>
          <Timeline items={experience} />
        </motion.div>
      </div>
    </Page>
  );
}
