import React, { useState } from 'react';
import { Bookmark } from '../types/Bookmark';

interface BookmarkListProps {
  bookmarks: Bookmark[];
  onDelete: (id: string) => void;
  onEdit: (updatedBookmark: Bookmark) => void;
}

const BookmarkList: React.FC<BookmarkListProps> = ({ bookmarks, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedBookmark, setEditedBookmark] = useState<Bookmark | null>(null);

  const handleEditClick = (bookmark: Bookmark) => {
    setEditingId(bookmark.id);
    setEditedBookmark(bookmark);
  };

  const handleSaveClick = () => {
    if (editedBookmark) {
      onEdit(editedBookmark);
      setEditingId(null);
      setEditedBookmark(null);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="p-4 border rounded shadow bg-white dark:bg-gray-800 flex flex-col justify-between">
          {editingId === bookmark.id ? (
            <>
              <input
                type="text"
                value={editedBookmark?.title || ''}
                onChange={(e) =>
                  setEditedBookmark({ ...editedBookmark!, title: e.target.value })
                }
                className="p-2 border border-gray-300 rounded mb-2 w-full"
              />
              <input
                type="url"
                value={editedBookmark?.url || ''}
                onChange={(e) =>
                  setEditedBookmark({ ...editedBookmark!, url: e.target.value })
                }
                className="p-2 border border-gray-300 rounded mb-2 w-full"
              />
              <button
                onClick={handleSaveClick}
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-lg font-semibold">
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    {bookmark.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 truncate">{bookmark.url}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{bookmark.category}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEditClick(bookmark)}
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(bookmark.id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                >
                  🗑 Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;