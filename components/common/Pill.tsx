// components/common/Pill.tsx
import React from 'react';

interface PillProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive = false }) => {
  const activeClasses = isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700';
  const hoverClasses = isActive ? '' : 'hover:bg-blue-100 hover:text-blue-700';

  return (
    <span
      className={`inline-block text-sm px-4 py-2 rounded-full cursor-pointer transition duration-300 ${activeClasses} ${hoverClasses}`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Pill;