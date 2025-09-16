import React from 'react';

export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center`}>
      <img 
        src="/image copy.png" 
        alt="DermaScan Logo" 
        className="h-full w-auto"
      />
    </div>
  );
}