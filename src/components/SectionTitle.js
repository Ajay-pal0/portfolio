import React from "react";

const SectionTitle = ({ title, className = "" }) => (
  <div className={`text-center mb-16 text-gray-900 ${className}`}>
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto" />
  </div>
);

export default React.memo(SectionTitle);