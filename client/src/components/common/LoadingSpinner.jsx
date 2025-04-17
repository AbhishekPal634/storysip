import React from "react";

function LoadingSpinner() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-800 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
