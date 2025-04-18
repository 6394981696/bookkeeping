import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LibraryItem from './LibraryItem';
import { getLibraries } from '../../api/libraries'; // Mock API function

const LibraryList = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    // Fetch libraries from your backend or API
    getLibraries().then((data) => setLibraries(data));
  }, []);

  return (
    <Grid container spacing={2}>
      {libraries.map((library) => (
        <Grid item xs={12} sm={6} md={4} key={library.id}>
          <LibraryItem library={library} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LibraryList;
