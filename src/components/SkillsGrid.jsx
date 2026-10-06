import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { rise } from './Page';
import { skillFilters, skillItems } from '../data/content';

function SkillIcon({ item }) {
  if (item.icon) return <i className={`skill-card__icon ${item.icon}`} />;
  if (item.emoji) return <span className="skill-card__icon">{item.emoji}</span>;
  return <span className="skill-card__icon skill-card__mono">{item.mono}</span>;
}

// Filter pills + icon grid, modeled on aakarsh-devhq's Skills section.
// Filtering is done with `hidden` (not unmount) so the grid never reflows
// awkwardly and cards can transition out instead of just disappearing.
export default function SkillsGrid() {
  const [active, setActive] = useState('all');

  const visible = useMemo(
    () => (active === 'all' ? skillItems : skillItems.filter((s) => s.category === active)),
    [active]
  );
  const visibleNames = new Set(visible.map((s) => s.name));

  return (
    <div>
      <motion.div className="skill-filters" variants={rise}>
        {skillFilters.map((f) => (
          <button
            key={f.id}
            className={`filter-pill${active === f.id ? ' is-active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      <motion.div className="skill-grid" variants={rise}>
        {skillItems.map((item) => (
          <div className="skill-card" key={item.name} hidden={!visibleNames.has(item.name)}>
            <SkillIcon item={item} />
            <span>{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
