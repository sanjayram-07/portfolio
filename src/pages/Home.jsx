import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import TypingWord from '../components/TypingWord';
import { profile, experience, heroWords } from '../data/content';

export default function Home() {
  return (
    <Page id="home">
      <div className="container">
        <section className="hero">
          <span className="hero__badge hero__badge--tl" aria-hidden="true">
            <i className="fa-solid fa-code" />
          </span>
          <span className="hero__badge hero__badge--tr" aria-hidden="true">
            <i className="fa-solid fa-brain" />
          </span>
          <span className="hero__badge hero__badge--bl" aria-hidden="true">
            <i className="fa-solid fa-trophy" />
          </span>
          <span className="hero__badge hero__badge--br" aria-hidden="true">
            <i className="fa-regular fa-lightbulb" />
          </span>

          <motion.p className="hero__kicker" variants={rise}>
            Woah! You landed on the portfolio website of the
          </motion.p>

          <motion.div variants={rise}>
            <TypingWord words={heroWords} />
          </motion.div>

          <motion.p className="hero__role-line" variants={rise}>
            <b>{profile.name}</b> · CSE Undergrad, MIT Anna University
          </motion.p>

          <motion.div className="hero__cta" variants={rise}>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              Let's Connect
            </a>
            <a className="btn btn--primary" href={profile.resume} target="_blank" rel="noreferrer">
              View Résumé
            </a>
          </motion.div>

          <motion.p className="hero__meta-row" variants={rise}>
            <span>
              <b>Based in</b> {profile.location}
            </span>
            <span>
              <b>Currently</b> {experience[0].role} · {experience[0].company}
            </span>
          </motion.p>
        </section>
      </div>
    </Page>
  );
}
