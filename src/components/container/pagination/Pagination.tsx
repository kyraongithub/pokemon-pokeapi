import React from 'react';

const Pagination: React.FC<{
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}> = ({ onNext, onPrev, hasNext, hasPrev }) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`px-4 py-2 rounded-md ${
          hasPrev
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`px-4 py-2 rounded-md ${
          hasNext
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
