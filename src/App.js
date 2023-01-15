import { Box, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import './App.css';

function App() {
  let numbers = ['1+', '2-', '3-', '4÷', '5x', '6+', '7+', '8-', '9+'];

  return (
    <Container sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '100%', height: '100%', gap: 4 }}>
        <Typography variant='h5'>
          kenken.io
        </Typography>
        <Grid2 container columns={12} sx={{
            '--Grid-borderWidth': '4px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: '#000000',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: '#000000',
            },
            width: '50vh',
            height: '50vh'
        }}>
          {numbers.map((number) => (
            <Grid2 item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  ":hover": {
              backgroundColor: '#e0e0e0',
              transition: 'all 0.3s ease'
            } }}>
              {number}
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}

export default App;
