import { useState, useCallback, useRef, useEffect } from 'react';

interface AnimatedTextProps {
  children: string;
  className?: string;
}

interface LetterPosition {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  inOrbit: boolean;
  isExploding: boolean;
  explodeVelocityX: number;
  explodeVelocityY: number;
  orbitAngle: number;
  rotation: number;
}

const CAPTURE_DISTANCE = 30;
const RELEASE_DISTANCE = 1200;
const ORBIT_RADIUS = 50;
const BASE_ORBIT_SPEED = 0.012;
const EXPLODE_FORCE = 15;

export function AnimatedText({ children, className = '' }: AnimatedTextProps) {
  const originalText = children;
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const positionsRef = useRef<LetterPosition[]>([]);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const [initialized, setInitialized] = useState(false);
  const [, forceUpdate] = useState(0);

  // Initialize positions
  useEffect(() => {
    const updateOriginalPositions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      positionsRef.current = originalText.split('').map((_, index) => {
        const letterEl = letterRefs.current[index];
        if (letterEl) {
          const rect = letterEl.getBoundingClientRect();
          const x = rect.left - containerRect.left + rect.width / 2;
          const y = rect.top - containerRect.top + rect.height / 2;
          return {
            x,
            y,
            originalX: x,
            originalY: y,
            inOrbit: false,
            isExploding: false,
            explodeVelocityX: 0,
            explodeVelocityY: 0,
            orbitAngle: 0,
            rotation: 0,
          };
        }
        return {
          x: 0, y: 0, originalX: 0, originalY: 0,
          inOrbit: false, isExploding: false,
          explodeVelocityX: 0, explodeVelocityY: 0,
          orbitAngle: 0, rotation: 0
        };
      });
      setInitialized(true);
      forceUpdate(n => n + 1);
    };

    // Small delay to ensure refs are populated
    const timer = setTimeout(updateOriginalPositions, 50);
    window.addEventListener('resize', updateOriginalPositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateOriginalPositions);
    };
  }, [originalText]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!containerRef.current || !initialized) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const cursorX = cursorRef.current.x - containerRect.left;
      const cursorY = cursorRef.current.y - containerRect.top;

      // Get letters currently in orbit (not exploding)
      const orbitingIndices = positionsRef.current
        .map((pos, i) => (pos.inOrbit && !pos.isExploding ? i : -1))
        .filter(i => i !== -1);

      const orbitCount = orbitingIndices.length;
      const orbitSpeed = BASE_ORBIT_SPEED * (1 + orbitCount * 0.1);

      let needsUpdate = false;

      positionsRef.current.forEach((pos, index) => {
        const char = originalText[index];
        if (char === ' ') return;

        const distToOriginal = Math.sqrt(
          Math.pow(cursorX - pos.originalX, 2) + Math.pow(cursorY - pos.originalY, 2)
        );

        // Check for capture - triggers explosion
        if (!pos.inOrbit && !pos.isExploding && distToOriginal < CAPTURE_DISTANCE) {
          pos.inOrbit = true;
          pos.isExploding = true;

          // Calculate explosion direction (away from cursor)
          const angle = Math.atan2(pos.y - cursorY, pos.x - cursorX);
          // Add some randomness to the explosion angle
          const randomAngle = angle + (Math.random() - 0.5) * 1.5;
          pos.explodeVelocityX = Math.cos(randomAngle) * EXPLODE_FORCE;
          pos.explodeVelocityY = Math.sin(randomAngle) * EXPLODE_FORCE;
          pos.orbitAngle = randomAngle;
          needsUpdate = true;
        }

        // Check for release - only when cursor is far from original position
        if (pos.inOrbit && !pos.isExploding && distToOriginal > RELEASE_DISTANCE) {
          pos.inOrbit = false;
          needsUpdate = true;
        }

        if (pos.isExploding) {
          // Apply explosion velocity
          pos.x += pos.explodeVelocityX;
          pos.y += pos.explodeVelocityY;

          // Apply friction
          pos.explodeVelocityX *= 0.92;
          pos.explodeVelocityY *= 0.92;

          // Rotate during explosion
          pos.rotation += 15;

          // Check if explosion is done (velocity is low enough)
          if (Math.abs(pos.explodeVelocityX) < 0.5 && Math.abs(pos.explodeVelocityY) < 0.5) {
            pos.isExploding = false;
            // Set orbit angle based on current position relative to cursor
            pos.orbitAngle = Math.atan2(pos.y - cursorY, pos.x - cursorX);
          }

          needsUpdate = true;
        } else if (pos.inOrbit) {
          // Update orbit angle
          pos.orbitAngle += orbitSpeed;

          // Calculate position in orbit with even spacing
          const myOrbitIndex = orbitingIndices.indexOf(index);
          const angleOffset = (myOrbitIndex / Math.max(orbitCount, 1)) * Math.PI * 2;
          const finalAngle = pos.orbitAngle + angleOffset;

          // Smoothly transition to orbit position
          const targetX = cursorX + Math.cos(finalAngle) * ORBIT_RADIUS;
          const targetY = cursorY + Math.sin(finalAngle) * ORBIT_RADIUS;

          pos.x += (targetX - pos.x) * 0.15;
          pos.y += (targetY - pos.y) * 0.15;

          // Tidal locking - rotate to face center
          const targetRotation = (finalAngle * 180) / Math.PI + 90;
          pos.rotation += (targetRotation - pos.rotation) * 0.15;

          needsUpdate = true;
        } else {
          // Return to original position with easing
          const dx = pos.originalX - pos.x;
          const dy = pos.originalY - pos.y;
          if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            pos.x += dx * 0.12;
            pos.y += dy * 0.12;
            pos.rotation += (0 - pos.rotation) * 0.12;
            needsUpdate = true;
          } else {
            pos.x = pos.originalX;
            pos.y = pos.originalY;
            pos.rotation = 0;
          }
        }
      });

      if (needsUpdate) {
        forceUpdate(n => n + 1);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [originalText, initialized]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    cursorRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleClick = useCallback(() => {
    // Release all orbiting letters on click
    positionsRef.current.forEach(pos => {
      if (pos.inOrbit) {
        pos.inOrbit = false;
        pos.isExploding = false;
      }
    });
    forceUpdate(n => n + 1);
  }, []);

  // Track cursor globally so it works even when cursor leaves the text area
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchend', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchend', handleClick);
    };
  }, [handleMouseMove, handleTouchMove, handleClick]);

  return (
    <span
      ref={containerRef}
      className={`inline-block cursor-default relative ${className}`}
      style={{ minHeight: '1.2em' }}
    >
      {/* Invisible placeholders to maintain layout - rendered first */}
      {originalText.split('').map((char, index) => (
        <span
          key={`placeholder-${index}`}
          ref={el => { letterRefs.current[index] = el; }}
          className={initialized ? "invisible select-none" : "select-none"}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {/* Visible letters - always absolutely positioned, only shown after initialization */}
      {initialized && originalText.split('').map((char, index) => {
        const pos = positionsRef.current[index];
        const isOrbiting = pos?.inOrbit || false;
        const isExploding = pos?.isExploding || false;
        const x = pos?.x ?? 0;
        const y = pos?.y ?? 0;
        const rotation = pos?.rotation ?? 0;

        return (
          <span
            key={`letter-${index}`}
            className={`absolute transition-none ${
              isOrbiting || isExploding ? 'text-amber-glow' : ''
            }`}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              textShadow: isOrbiting || isExploding
                ? '0 0 12px rgba(251, 191, 36, 0.9), 0 0 20px rgba(251, 191, 36, 0.5)'
                : 'none',
              zIndex: isOrbiting || isExploding ? 10 : 1,
              pointerEvents: 'none',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
}
