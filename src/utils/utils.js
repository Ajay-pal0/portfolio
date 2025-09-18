export const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const calculateExperienceYears = (startDate='2021-8-25', endDate = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    const diffInMs = end - start;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // account for leap years
  
    const wholeYears = Math.floor(diffInYears);
  
    // If exact (like 2.0) → "2 years"
    // If decimal (like 2.4) → "2+ years"
    return diffInYears > wholeYears ? `${wholeYears}+ years` : `${wholeYears} years`;
  };