import React from 'react';

interface BookmarkFilterProps {
  categories: string[];
  filter: string;
  onFilterChange: (category: string) => void;
}

const BookmarkFilter: React.FC<BookmarkFilterProps> = ({ categories, filter, onFilterChange }) => {
  return (
    <select
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="All">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default BookmarkFilter;