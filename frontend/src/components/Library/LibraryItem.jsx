import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const LibraryItem = ({ library }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {library.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {library.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Books Count: {library.booksCount}
        </Typography>
        <Button size="small" color="primary" sx={{ marginTop: '10px' }}>
          View Books
        </Button>
      </CardContent>
    </Card>
  );
};

export default LibraryItem;
