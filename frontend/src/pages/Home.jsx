import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>📚 Bookkeeping Service</Typography>
      <Typography>Welcome to our library system where authors write, libraries host, and borrowers read!</Typography>
    </Container>
  );
};

export default Home;
