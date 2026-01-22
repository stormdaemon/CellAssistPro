/**
 * Stats Counter Section - BEM Component
 * Block: stats
 * Elements: stats__container, stats__grid, stats__item, stats__icon, stats__label, stats__value
 * Effect: Animated counter with blur and speed effect
 */
"use client";

import { useState, useEffect, useRef } from "react";

export function StatsCounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setIsAnimating(true);
    const startTime = performance.now();
    const frameDuration = 1000 / 60; // 60 FPS

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation with speed effect
      const easeOut = (t: number) => {
        // Exponential easing for speed effect
        return 1 - Math.pow(1 - t, 3);
      };

      const easedProgress = easeOut(progress);

      // First counter
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      // Second counter (if exists)
      if (endSecond !== undefined) {
        const currentCount2 = Math.floor(easedProgress * endSecond);
        setCount2(currentCount2);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, duration, end, endSecond]);

  return (
    <p className={`stats__value ${isAnimating ? 'stats__value--animating' : ''}`}>
      +{count}
      {suffix}
      {endSecond !== undefined && (
        <span className={isAnimating ? 'stats__value--blur' : ''}>
          {count2}
        </span>
      )}
      {suffixFinal}
    </p>
  );
}
