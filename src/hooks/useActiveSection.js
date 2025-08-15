import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds, options = { threshold: 0.6 }) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || null);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      options
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};
