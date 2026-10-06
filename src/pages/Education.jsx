import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import { education } from '../data/content';

export default function Education() {
  return (
    <Page id="education">
      <div className="container">
        <motion.div className="section-head" variants={rise}>
          <span className="pill">Education</span>
          <h2>Where I've studied</h2>
          <p>Computer Science at Madras Institute of Technology, Anna University — after a Computer Science stream at school.</p>
        </motion.div>

        <div className="edu-grid">
          {education.map((e) => (
            <motion.article className="edu" key={e.id} style={{ '--edu-tint': e.tint }} variants={rise}>
              <div className="edu__media">
                <img src={e.image} alt="" aria-hidden="true" loading="lazy" />
                <div className="edu__badge">
                  <img src={e.logo} alt={`${e.school} logo`} loading="lazy" />
                </div>
              </div>

              <div className="edu__body">
                <h3 className="edu__school">{e.school}</h3>
                <p className="edu__parent">{e.parent}</p>
                <p className="edu__degree">{e.degree}</p>

                <div className="edu__meta">
                  <span>{e.period}</span>
                  {e.grade && <span className="edu__grade">{e.grade}</span>}
                </div>

                <ul className="edu__notes">
                  {e.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Page>
  );
}
