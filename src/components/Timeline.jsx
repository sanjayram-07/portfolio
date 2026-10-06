import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Centre-line alternating timeline, modeled on aakarsh-devhq.vercel.app:
// a glowing progress line fills as you scroll, cards alternate left/right,
// a ghost number sits behind each card, and the date sits outside the card
// on the line side.
export default function Timeline({ items }) {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start center', 'end center'],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="timeline" ref={trackRef}>
      <div className="timeline-line">
        <motion.div className="timeline-progress" style={{ height: progressHeight }} />
      </div>

      {items.map((item, i) => {
        const side = i % 2 === 0 ? 'left' : 'right';
        return (
          <motion.div
            key={item.id}
            className={`timeline-item ${side}`}
            style={{ '--item-tint': item.tint }}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="timeline-number">{String(i + 1).padStart(2, '0')}</div>

            <div className="timeline-content">
              <span className="timeline-tag">{item.company}</span>
              <img className="timeline-logo" src={item.logo} alt={`${item.company} logo`} loading="lazy" />
              <h3>{item.role}</h3>
              <p className="timeline-where">
                {item.location}
                <span className="timeline-mode">{item.mode}</span>
              </p>

              <ul className="timeline-points">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div className="tag-row timeline-stack">
                {item.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="timeline-date">{item.period}</div>
            <div className="timeline-dot" />
          </motion.div>
        );
      })}
    </div>
  );
}
