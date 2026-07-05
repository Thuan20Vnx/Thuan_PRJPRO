import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContactButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function ContactButton({ className, ...props }: ContactButtonProps) {
  return (
    <a
      href="mailto:nguyenthithaovan0204@gmail.com"
      className={cn(
        "inline-block rounded-full text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 cursor-pointer",
        "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4",
        "text-xs sm:text-sm md:text-base",
        className
      )}
      style={{
        background: 'linear-gradient(123deg, #EBA746 7%, #F2C078 45%, #4A90D9 100%)',
        boxShadow: '0px 4px 14px rgba(235, 167, 70, 0.35)',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
      {...props}
    >
      Contact Me
    </a>
  );
}
