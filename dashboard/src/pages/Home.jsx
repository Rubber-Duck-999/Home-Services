import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';
import Title from '../components/title';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'dark',
  padding: theme.spacing(1),
  margin: theme.spacing(0, 1),
  textAlign: 'center',
  color: 'blue',
}));

function Home() {
  return (
    <div>
      <Title title={"House Manager"} />
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>)
};


export default Home;