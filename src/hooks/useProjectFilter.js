import { useState, useMemo } from 'react';
import { projectsData } from '../data';

export const useProjectFilter = () => {
    // Primary tab: 'personal' | 'professional'
    const [activeType, setActiveType] = useState('professional');
    // Secondary category filter within the active type
    const [activeCategory, setActiveCategory] = useState('All');

    // Projects filtered by primary type
    const typeFilteredProjects = useMemo(() => {
        return projectsData.filter(p => p.type === activeType);
    }, [activeType]);

    // Derive categories from only the currently visible type
    const categories = useMemo(() => {
        const list = new Set(typeFilteredProjects.map(p => p.category));
        return ['All', ...Array.from(list)];
    }, [typeFilteredProjects]);

    // Final list applying both type + category filters
    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return typeFilteredProjects;
        return typeFilteredProjects.filter(p => p.category === activeCategory);
    }, [typeFilteredProjects, activeCategory]);

    const handleTypeChange = (type) => {
        setActiveType(type);
        setActiveCategory('All'); // reset category when switching primary tab
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return {
        projects: filteredProjects,
        categories,
        activeCategory,
        handleCategoryChange,
        activeType,
        handleTypeChange,
    };
};
