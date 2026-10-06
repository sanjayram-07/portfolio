import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import { certifications } from '../data/content';

export default function Certs() {
  return (
    <Page id="certs">
      <div className="container">
        <motion.div className="section-head" variants={rise}>
          <span className="pill">Certifications</span>
          <h2>
            Certs &amp; Training – <span className="accent-phrase">Proof of Work!</span>
          </h2>
          <p>Courses and internship-issued certificates that back up what's on the résumé.</p>
        </motion.div>

        <motion.div className="cert-grid" variants={rise}>
          {certifications.map((c) => (
            <div className="cert-card" key={c.title}>
              <b>{c.title}</b>
              <span>
                {c.issuer} · {c.date}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Page>
  );
}
