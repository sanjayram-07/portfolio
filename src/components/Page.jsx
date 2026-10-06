import { motion } from 'framer-motion';

// Every section on the one-page scroll uses this: it orchestrates its
// children's reveal (via the `rise` variant below) once the section enters
// the viewport, instead of all at once on page load.
const sectionVariants = {
  initial: {},
  enter: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function Page({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`page ${className}`.trim()}
      variants={sectionVariants}
      initial="initial"
      whileInView="enter"
      viewport={{ once: true, amount: 0.16 }}
    >
      {children}
    </motion.section>
  );
}

export const rise = {
  initial: { opacity: 0, y: 26 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
