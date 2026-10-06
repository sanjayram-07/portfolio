import { useEffect, useState } from 'react';

// Same type/delete/pause cycle as aakarsh-devhq's hero word rotator:
// types a word out, holds, deletes it, moves to the next.
export default function TypingWord({ words, typeSpeed = 95, deleteSpeed = 55, holdTime = 1400 }) {
  const [text, setText] = useState('');
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced || !words?.length) {
      setText(words?.[0] ?? '');
      return undefined;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function tick() {
      const current = words[wordIndex];

      if (isDeleting) {
        charIndex -= 1;
      } else {
        charIndex += 1;
      }
      setText(current.substring(0, charIndex));

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === current.length) {
        speed = holdTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 450;
      }

      timeoutId = setTimeout(tick, speed);
    }

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="hero__type-wrap">
      <span className="hero__type-line">
        <span className="hero__type">{text}</span>
        <span className="hero__cursor" aria-hidden="true" />
      </span>
    </span>
  );
}
