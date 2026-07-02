'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the most prominent visible section for nav highlighting.
 */
export function useActiveSection(sectionIds: string[], offset = 0.4): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }

        let best = active;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        if (bestRatio > 0) setActive(best);
      },
      {
        // Bias detection toward the upper portion of the viewport.
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round(
          (1 - offset) * 100,
        )}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(','), offset]);

  return active;
}
