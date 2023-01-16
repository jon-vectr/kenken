import { Box, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import './App.css';

function App() {
  let numbers = [1, 3, 2, 3, 2, 1, 2, 1, 3];

  return (
    <Container sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '100%', height: '100%', gap: 4 }}>
        <Typography variant='h5'>
          kenken.io
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid2 container columns={3} spacing={0} sx={{
            width: '40vh',
            height: '40vh',
            '--Grid-borderWidth': '3px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
          },
        }}>
            {numbers.map((number) => (
              <Grid2 item xs={1} sx={{ p: 1 }}>
                <Typography variant='h6'>
                  {number}
                </Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
