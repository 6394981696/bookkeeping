import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const BookDetails = () => {
  const { id } = useParams();
  return <Typography variant="h5">📘 Details of Book ID: {id}</Typography>;
};

export default BookDetails;
