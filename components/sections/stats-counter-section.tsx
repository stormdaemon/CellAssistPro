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
  const lastCount = useRef(0);
  const lastCount2 = useRef(0);

  const easeOutQuad = useCallback((t: number): number => {
    // Easing plus doux - ralentit moins brutalement à la fin
    return t * (2 - t);
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      // Calculate blur based on speed (more change = more blur)
      const blurIntensity = (1 - progress) * 3; // Max 3px blur at start, fades to 0

      // Update DOM directly - no React re-render
      const newCount = Math.floor(easedProgress * end);
      if (countRef.current) {
        countRef.current.textContent = String(newCount);
        // Apply motion blur when value changes
        if (newCount !== lastCount.current) {
          countRef.current.style.filter = `blur(${blurIntensity}px)`;
          lastCount.current = newCount;
        }
      }

      if (endSecond !== undefined && count2Ref.current) {
        const newCount2 = Math.floor(easedProgress * endSecond);
        count2Ref.current.textContent = String(newCount2);
        // Apply motion blur when value changes
        if (newCount2 !== lastCount2.current) {
          count2Ref.current.style.filter = `blur(${blurIntensity}px)`;
          lastCount2.current = newCount2;
        }
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Clear blur at end
        if (countRef.current) countRef.current.style.filter = 'none';
        if (count2Ref.current) count2Ref.current.style.filter = 'none';
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, duration, end, endSecond, easeOutQuad]);

  return (
    <p ref={containerRef} className="stats__value">
      +<span ref={countRef} className="stats__number">0</span>
      {suffix}
      {endSecond !== undefined && (
        <span ref={count2Ref} className="stats__number">0</span>
      )}
      {suffixFinal}
    </p>
  );
}
