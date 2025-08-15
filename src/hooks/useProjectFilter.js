import { useState, useMemo } from 'react';
import { projects, projectCategories } from '../constants/data';

export const useProjectFilter = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') {
            return projects;
        }
        return projects.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return {
        projects: filteredProjects,
        categories: projectCategories,
        activeCategory,
        handleCategoryChange
    };
};
