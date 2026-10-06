import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import { profile } from '../data/content';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, note: 'Fastest' },
  { label: 'LinkedIn', value: '/in/sanjayram07', href: profile.linkedin, note: 'Connect' },
  { label: 'GitHub', value: '@sanjayram-07', href: profile.github, note: 'Code' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, note: 'Call' },
];

export default function Contact() {
  return (
    <Page id="contact">
      <div className="container">
        <motion.div className="section-head" variants={rise}>
          <span className="pill">Contact</span>
          <h2>Let's build something</h2>
          <p>
            Open to software engineering internships, full-stack work and research collaboration. The quickest way to
            reach me is email.
          </p>
        </motion.div>

        <motion.div className="contact-grid" variants={rise}>
          {channels.map((c) => (
            <a
              className="contact-card"
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <em>{c.note}</em>
              <b>{c.label}</b>
              <span>{c.value}</span>
            </a>
          ))}
        </motion.div>

        <motion.div variants={rise} style={{ marginTop: 32 }}>
          <a className="btn btn--primary" href={profile.resume} target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </motion.div>
      </div>
    </Page>
  );
}
