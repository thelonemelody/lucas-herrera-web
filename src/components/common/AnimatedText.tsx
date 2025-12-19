import { useState, useCallback, useRef } from 'react';

interface AnimatedTextProps {
  children: string;
  className?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}';

interface LetterState {
  char: string;
  isScrambling: boolean;
}

export function AnimatedText({ children, className = '' }: AnimatedTextProps) {
  const originalText = children;
  const [letters, setLetters] = useState<LetterState[]>(
    originalText.split('').map(char => ({ char, isScrambling: false }))
  );
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastTriggeredRef = useRef<number>(-1);

  const scrambleLetter = useCallback((index: number) => {
    const originalChar = originalText[index];
    if (originalChar === ' ') return;

    // Clear any existing timeout for this letter
    const existingTimeout = timeoutsRef.current.get(index);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    // Start scrambling
    let iterations = 0;
    const maxIterations = 6;

    const scramble = () => {
      setLetters(prev => {
        const newLetters = [...prev];
        if (iterations < maxIterations) {
          newLetters[index] = {
            char: CHARS[Math.floor(Math.random() * CHARS.length)],
            isScrambling: true,
          };
        } else {
          newLetters[index] = {
            char: originalChar,
            isScrambling: false,
          };
        }
        return newLetters;
      });

      iterations++;
      if (iterations <= maxIterations) {
        const timeout = setTimeout(scramble, 50);
        timeoutsRef.current.set(index, timeout);
      } else {
        timeoutsRef.current.delete(index);
      }
    };

    scramble();
  }, [originalText]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    // Find which letter index this element corresponds to
    const index = letterRefs.current.findIndex(ref => ref === element);
    if (index !== -1 && index !== lastTriggeredRef.current) {
      lastTriggeredRef.current = index;
      scrambleLetter(index);
    }
  }, [scrambleLetter]);

  const handleTouchEnd = useCallback(() => {
    lastTriggeredRef.current = -1;
  }, []);

  return (
    <span
      className={`inline-block cursor-default ${className}`}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          ref={el => { letterRefs.current[index] = el; }}
          className={`inline-block transition-all duration-75 ${
            letter.isScrambling
              ? 'text-amber-glow scale-110'
              : ''
          }`}
          style={{
            textShadow: letter.isScrambling
              ? '0 0 12px rgba(251, 191, 36, 0.9), 0 0 20px rgba(251, 191, 36, 0.5)'
              : 'none',
          }}
          onMouseEnter={() => scrambleLetter(index)}
          onTouchStart={() => scrambleLetter(index)}
        >
          {letter.char === ' ' ? '\u00A0' : letter.char}
        </span>
      ))}
    </span>
  );
}
