import React, { useState } from 'react';
import { Bookmark } from '../types/Bookmark';

interface BookmarkFormProps {
  onAddBookmark: (bookmark: Bookmark) => void;
  onAddCategory: (category: string) => void;
  categories: string[];
}

const BookmarkForm: React.FC<BookmarkFormProps> = ({ onAddBookmark, onAddCategory, categories }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('Personal');
  const [customCategory, setCustomCategory] = useState('');

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !url) {
      alert('Title and URL are required.');
      return;
    }

    if (!isValidUrl(url)) {
      alert('Please enter a valid URL.');
      return;
    }

    const newBookmark: Bookmark = {
      id: Date.now().toString(),
      title,
      url,
      category,
      createdAt: new Date(),
    };

    onAddBookmark(newBookmark);
    setTitle('');
    setUrl('');
    setCategory('Personal');
  };

  const handleAddCategory = () => {
    if (customCategory.trim()) {
      onAddCategory(customCategory.trim());
      setCustomCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-sm bg-white dark:bg-gray-800">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Bookmark Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="url"
          placeholder="Bookmark URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add custom category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Category
          </button>
        </div>
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Bookmark
        </button>
      </div>
    </form>
  );
};

export default BookmarkForm;