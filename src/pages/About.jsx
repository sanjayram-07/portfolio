import { motion } from 'framer-motion';
import Page, { rise } from '../components/Page';
import { profile, achievements } from '../data/content';

export default function About() {
  return (
    <Page id="about">
      <div className="container">
        <motion.div className="section-head" variants={rise}>
          <span className="pill">About</span>
          <h2>
            About Me – <span className="accent-phrase">Behind The Code!</span>
          </h2>
          <p>{profile.summary}</p>
        </motion.div>

        <motion.div className="about-grid" variants={rise}>
          <div className="prose">
            {profile.about.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>

          <aside>
            <h3 className="aside-head">Achievements</h3>
            <div className="card-list">
              {achievements.map((a) => (
                <div className="mini" key={a.title}>
                  <b>{a.title}</b>
                  <span>
                    {a.org} · {a.date}
                  </span>
                  <p>{a.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </motion.div>
      </div>
    </Page>
  );
}
