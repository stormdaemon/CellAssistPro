/**
 * Stats Counter Section - BEM Component
 * Block: stats
 * Elements: stats__container, stats__grid, stats__item, stats__icon, stats__label, stats__value
 * Effect: Animated counter with blur and speed effect
 */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function StatsCounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          {/* Stat 1: Hours gained */}
          <div className={`stats__item ${isVisible ? 'stats__item--visible' : ''}`}>
            <div className="stats__icon">
              📊
            </div>
            <div className="stats__content">
              <AnimatedCounter
                end={15}
                suffix=" à "
                endSecond={20}
                suffixFinal="h/mois"
                isVisible={isVisible}
                duration={2000}
              />
              <p className="stats__label">gagnées en moyenne</p>
            </div>
          </div>

          {/* Stat 2: Processes automated */}
          <div className={`stats__item ${isVisible ? 'stats__item--visible' : ''}`}>
            <div className="stats__icon">
              🔁
            </div>
            <div className="stats__content">
              <AnimatedCounter
                end={3}
                suffix=" à "
                endSecond={5}
                suffixFinal=" process clés"
                isVisible={isVisible}
                duration={2000}
              />
              <p className="stats__label">automatisés en moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  endSecond?: number;
  suffixFinal?: string;
  isVisible: boolean;
  duration: number;
}

function AnimatedCounter({
  end,
  suffix = "",
  endSecond,
  suffixFinal = "",
  isVisible,
  duration
}: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const count2Ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const animationRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  const easeOutCubic = useCallback((t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    if (containerRef.current) {
      containerRef.current.classList.add('stats__value--animating');
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      // Update DOM directly - no React re-render
      if (countRef.current) {
        countRef.current.textContent = String(Math.floor(easedProgress * end));
      }

      if (endSecond !== undefined && count2Ref.current) {
        count2Ref.current.textContent = String(Math.floor(easedProgress * endSecond));
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        if (containerRef.current) {
          containerRef.current.classList.remove('stats__value--animating');
        }
        if (count2Ref.current) {
          count2Ref.current.classList.remove('stats__value--blur');
        }
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, duration, end, endSecond, easeOutCubic]);

  return (
    <p ref={containerRef} className="stats__value">
      +<span ref={countRef}>0</span>
      {suffix}
      {endSecond !== undefined && (
        <span ref={count2Ref} className="stats__value--blur">0</span>
      )}
      {suffixFinal}
    </p>
  );
}
