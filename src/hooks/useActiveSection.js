import { useEffect, useState, useRef } from "react";

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || null);
  // Keep a stable ref of the latest active section to avoid stale closures
  const activeSectionRef = useRef(sectionIds[0] || null);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    // Track how much of each section is currently visible
    const visibilityMap = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });

        // Pick the section with the highest ratio currently visible
        let maxRatio = 0;
        let mostVisible = activeSectionRef.current;

        Object.entries(visibilityMap).forEach(([id, ratio]) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (mostVisible && mostVisible !== activeSectionRef.current) {
          activeSectionRef.current = mostVisible;
          setActiveSection(mostVisible);
        }
      },
      {
        // Multiple thresholds so even a small overlap fires an update
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Negative top margin shrinks the trigger zone to the middle of the
        // viewport — great for long sections like Projects
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
