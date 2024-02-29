
import React, { useState, useEffect } from 'react';
// Importing Fuse library for fuzzy searching
import Fuse from 'fuse.js';

import CodeSnippet from './CodeSnippet';

import styles from '../styles/CodeSnippetList.module.css'; 

// Declaring CodeSnippetList component, which takes snippets as props
const CodeSnippetList = ({ snippets }) => {
  // Initializing state variables for search results and displayed snippet
  const [searchResults, setSearchResults] = useState([]);
  const [displayedSnippet, setDisplayedSnippet] = useState(null); 
  // State to track the displayed snippet

  // Creating a new instance of Fuse for fuzzy searching with given options
  const fuse = new Fuse(snippets, {
    keys: ['title', 'code'], // Define keys to search within
    includeScore: true, // Include score for search results
    threshold: 0.3, // Define the threshold for search matching
  });

  // Function to handle search based on the provided query
  const handleSearch = (query) => {
    // If query is empty, reset search results and displayed snippet
    if (!query) {
      setSearchResults([]);
      setDisplayedSnippet(null); 
      // Reset displayed snippet when clearing the search
      return;
    }
    // Perform search with Fuse and update search results
    const results = fuse.search(query);
    setSearchResults(results.map(result => result.item));
  };

  // Effect hook to automatically display the first search result or reset displayed snippet
  useEffect(() => {
    if (searchResults.length > 0) {
      setDisplayedSnippet(searchResults[0]); 
      // Display the first search result automatically
    } else {
      setDisplayedSnippet(null); 
      // Reset again
    }
  }, [searchResults]);
   // Trigger effect when search results change

  // Rendering JSX for the CodeSnippetList component
  return (
    <div className={styles.listContainer}>
      {/* Input field for searching snippets */}
      <input
        type="text"
        className={styles.searchInput}
        // Handling onChange event to perform search
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
      />
      {/* Displaying the selected snippet or a message if no results found */}
      {displayedSnippet ? (
        <CodeSnippet title={displayedSnippet.title} code={displayedSnippet.code} />
      ) : (
        <p className={styles.noResults}>No results found.</p>
      )}
    </div>
  );
};
export default CodeSnippetList;







