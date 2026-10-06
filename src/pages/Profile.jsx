import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import { profile, socials } from '../data/content';

export default function Profile() {
  return (
    <Page id="profile">
      <div className="container">
        <motion.div className="section-head" style={{ textAlign: 'center' }} variants={rise}>
          <span className="pill">Profile</span>
          <h2>
            Web Presence – <span className="accent-phrase">Find Me Online!</span>
          </h2>
        </motion.div>

        <motion.div className="profile-wrap" variants={rise}>
          <div className="profile-photo-ring">
            <img src={profile.photo} alt={profile.name} loading="lazy" />
          </div>
          <span className="profile-handle">{profile.handle}</span>
        </motion.div>

        <motion.div className="profile-grid" variants={rise}>
          {socials.map((s) => (
            <a
              className="profile-card"
              key={s.label}
              style={{ '--card-tint': s.tint }}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <i className={`profile-card__icon ${s.icon}`} />
              <b>{s.label}</b>
              <span>{s.sub}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </Page>
  );
}
