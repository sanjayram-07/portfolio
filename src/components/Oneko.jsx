import { useEffect } from 'react';

// oneko — the pixel cat that chases the cursor.
// Sprite sheet is 8x4 frames of 32x32 (public/oneko.gif), scaled to 32px on screen.
const SPRITE = 32;

const SPRITE_SETS = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

export default function Oneko() {
  useEffect(() => {
    // Respect the OS "reduce motion" setting — no chasing cat for people who opted out.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;
    if (document.getElementById('oneko')) return;

    const el = document.createElement('div');
    el.id = 'oneko';
    el.ariaHidden = 'true';
    el.setAttribute('role', 'presentation');
    Object.assign(el.style, {
      width: `${SPRITE}px`,
      height: `${SPRITE}px`,
      position: 'fixed',
      pointerEvents: 'none',
      imageRendering: 'pixelated',
      left: '16px',
      top: '16px',
      zIndex: 2147483647,
      backgroundImage: 'url(/oneko.gif)',
    });
    document.body.appendChild(el);

    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 32;
    let mousePosY = 32;

    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;

    const nekoSpeed = 10;

    const onMouseMove = (event) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    function setSprite(name, frame) {
      const sprite = SPRITE_SETS[name][frame % SPRITE_SETS[name].length];
      el.style.backgroundPosition = `${sprite[0] * SPRITE}px ${sprite[1] * SPRITE}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      // Every so often while standing still, do something cat-like.
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
        const available = ['sleeping', 'scratchSelf'];
        if (nekoPosX < 32) available.push('scratchWallW');
        if (nekoPosY < 32) available.push('scratchWallN');
        if (nekoPosX > window.innerWidth - 32) available.push('scratchWallE');
        if (nekoPosY > window.innerHeight - 32) available.push('scratchWallS');
        idleAnimation = available[Math.floor(Math.random() * available.length)];
      }

      switch (idleAnimation) {
        case 'sleeping':
          if (idleAnimationFrame < 8) {
            setSprite('tired', 0);
            break;
          }
          setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite('idle', 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      // Brief "alert" pause before giving chase, like the original.
      if (idleTime > 1) {
        setSprite('alert', 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = '';
      direction += diffY / distance > 0.5 ? 'N' : '';
      direction += diffY / distance < -0.5 ? 'S' : '';
      direction += diffX / distance > 0.5 ? 'W' : '';
      direction += diffX / distance < -0.5 ? 'E' : '';
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      el.style.left = `${nekoPosX - 16}px`;
      el.style.top = `${nekoPosY - 16}px`;
    }

    // Fixed 100ms tick keeps the sprite animation readable instead of blurring at 60fps.
    const interval = setInterval(frame, 100);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', onMouseMove);
      el.remove();
    };
  }, []);

  return null;
}
