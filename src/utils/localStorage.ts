import { Bookmark } from '../types/Bookmark';

const STORAGE_KEY = 'bookmarks';

export const getBookmarks = (): Bookmark[] => {
  const bookmarks = localStorage.getItem(STORAGE_KEY);
  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const saveBookmarks = (bookmarks: Bookmark[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
};