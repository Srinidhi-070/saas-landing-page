import React from 'react';

interface AnimatedBlobProps {
  className?: string;
  color?: string;
  animationDelay?: string;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className, color = 'bg-primary-500/30', animationDelay = '0s' }) => {
  return (
    <div
      className={`absolute w-96 h-96 rounded-full filter blur-3xl opacity-50 animate-blob ${color} ${className}`}
      style={{ animationDelay }}
    />
  );
};

export default AnimatedBlob;
