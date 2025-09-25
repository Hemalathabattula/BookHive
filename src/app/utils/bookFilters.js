// src/app/utils/bookFilters.js

/**
 * Filter books by fiction categories
 * @param {Array} books - Array of book objects
 * @param {string} category - Fiction category to filter by
 * @returns {Array} Filtered books array
 */
export const filterBooksByCategory = (books, category) => {
  return books.filter(book => book.genre === category);
};

/**
 * Get all unique fiction categories from books
 * @param {Array} books - Array of book objects
 * @returns {Array} Array of unique fiction categories
 */
export const getFictionCategories = (books) => {
  const fictionGenres = [
    'Fantasy',
    'Modern Fiction',
    'Romance',
    'Thriller & Suspense',
    'Adventure Books',
    'Classic Fiction'
  ];

  return fictionGenres.filter(category =>
    books.some(book => book.genre === category)
  );
};

/**
 * Get books count for each fiction category
 * @param {Array} books - Array of book objects
 * @returns {Object} Object with category names as keys and counts as values
 */
export const getCategoryCounts = (books) => {
  const fictionGenres = [
    'Fantasy',
    'Modern Fiction',
    'Romance',
    'Thriller & Suspense',
    'Adventure Books',
    'Classic Fiction'
  ];

  return fictionGenres.reduce((counts, category) => {
    counts[category] = books.filter(book => book.genre === category).length;
    return counts;
  }, {});
};

/**
 * Check if a book belongs to fiction categories
 * @param {Object} book - Book object
 * @returns {boolean} True if book is fiction
 */
export const isFictionBook = (book) => {
  const fictionGenres = [
    'Fantasy',
    'Modern Fiction',
    'Romance',
    'Thriller & Suspense',
    'Adventure Books',
    'Classic Fiction'
  ];

  return fictionGenres.includes(book.genre);
};

/**
 * Filter books by non-fiction categories
 * @param {Array} books - Array of book objects
 * @param {string} category - Non-fiction category to filter by
 * @returns {Array} Filtered books array
 */
export const filterNonFictionBooksByCategory = (books, category) => {
  return books.filter(book => book.genre === category);
};

/**
 * Get all unique non-fiction categories from books
 * @param {Array} books - Array of book objects
 * @returns {Array} Array of unique non-fiction categories
 */
export const getNonFictionCategories = (books) => {
  const nonFictionGenres = [
    'History',
    'Science',
    'Biography',
    'Self-Help',
    'Business',
    'Philosophy'
  ];

  return nonFictionGenres.filter(category =>
    books.some(book => book.genre === category)
  );
};

/**
 * Get books count for each non-fiction category
 * @param {Array} books - Array of book objects
 * @returns {Object} Object with category names as keys and counts as values
 */
export const getNonFictionCategoryCounts = (books) => {
  const nonFictionGenres = [
    'History',
    'Science',
    'Biography',
    'Self-Help',
    'Business',
    'Philosophy'
  ];

  return nonFictionGenres.reduce((counts, category) => {
    counts[category] = books.filter(book => book.genre === category).length;
    return counts;
  }, {});
};

/**
 * Check if a book belongs to non-fiction categories
 * @param {Object} book - Book object
 * @returns {boolean} True if book is non-fiction
 */
export const isNonFictionBook = (book) => {
  const nonFictionGenres = [
    'History',
    'Science',
    'Biography',
    'Self-Help',
    'Business',
    'Philosophy'
  ];

  return nonFictionGenres.includes(book.genre);
};
