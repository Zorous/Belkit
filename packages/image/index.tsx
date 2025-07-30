"use client";
import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const SmartImage = ({ fallback, ...props }: ImageProps) => {
  const [src, setSrc] = useState(props.src);

  return (
    <img
      {...props}
      src={src}
      onError={() => fallback && setSrc(fallback)}
      alt={props.alt || 'image'}
    />
  );
};
