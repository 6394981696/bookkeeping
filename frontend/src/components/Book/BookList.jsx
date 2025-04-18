import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import BookItem from './BookItem';
import { getBooks } from '../../api/books'; // This is a mock API function

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from your backend or API
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookItem book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
