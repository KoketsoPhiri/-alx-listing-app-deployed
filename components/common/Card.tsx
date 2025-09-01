// components/common/Card.tsx
import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;