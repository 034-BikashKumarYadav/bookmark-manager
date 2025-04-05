import { useEffect, useState } from 'react';
import BookmarkList from '../components/BookmarkList';
import BookmarkForm from '../components/BookmarkForm';
import BookmarkFilter from '../components/BookmarkFilter';
import ThemeToggle from '../components/ThemeToggle';
import { Bookmark } from '../types/Bookmark';
import { getBookmarks, saveBookmarks } from '../utils/localStorage';

const Home = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState<Bookmark[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('date');
  const [categories, setCategories] = useState<string[]>(['Personal', 'Work', 'Other']);

  useEffect(() => {
    const storedBookmarks = getBookmarks();
    setBookmarks(storedBookmarks);
    setFilteredBookmarks(storedBookmarks);
  }, []);

  const addBookmark = (bookmark: Bookmark) => {
    const updatedBookmarks = [...bookmarks, bookmark];
    setBookmarks(updatedBookmarks);
    setFilteredBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };

  const deleteBookmark = (id: string) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
    setFilteredBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };

  const editBookmark = (updatedBookmark: Bookmark) => {
    const updatedBookmarks = bookmarks.map((bookmark) =>
      bookmark.id === updatedBookmark.id ? updatedBookmark : bookmark
    );
    setBookmarks(updatedBookmarks);
    setFilteredBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };

  const handleFilterChange = (category: string) => {
    setFilter(category);
    const filtered = category === 'All' ? bookmarks : bookmarks.filter((b) => b.category === category);
    setFilteredBookmarks(filtered);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const searched = bookmarks.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBookmarks(searched);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    const sorted = [...filteredBookmarks].sort((a, b) => {
      if (option === 'alphabetical') {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
    setFilteredBookmarks(sorted);
  };

  const addCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bookmark Manager</h1>
        <ThemeToggle />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <input
          type="text"
          placeholder="Search bookmarks..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-4"
        />
        <select
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-4"
        >
          <option value="date">Sort by Date</option>
          <option value="alphabetical">Sort Alphabetically</option>
        </select>
        <BookmarkFilter
          categories={categories}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>
      <BookmarkForm onAddBookmark={addBookmark} onAddCategory={addCategory} categories={categories} />
      <BookmarkList bookmarks={filteredBookmarks} onDelete={deleteBookmark} onEdit={editBookmark} />
    </div>
  );
};

export default Home;