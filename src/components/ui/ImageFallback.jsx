// components/products/ProductImageFallback.jsx
import React from 'react';

const ProductImageFallback = ({ className = '', aspectRatio = '1/1' }) => {
  // Estilos para proporção de aspecto dinâmica
  const paddingBottom = `${(aspectRatio.split('/')[1] / aspectRatio.split('/')[0]) * 100}%`;

  return (
    <div
      className={`image-fallback ${className}`}
      style={{ paddingBottom }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fallback-icon"
      >
        <path
          d="M4 16L8.5 10.5L12 14.5L15.5 9.5L20 16M4 16H20M4 16V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16Z"
          stroke="#D1D5DB"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default ProductImageFallback;