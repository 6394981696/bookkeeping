import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookItem = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Library: {book.library}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Borrower: {book.borrower ? book.borrower : 'Not Borrowed'}
        </Typography>
        <Button size="small" color="primary" sx={{ marginTop: '10px' }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
