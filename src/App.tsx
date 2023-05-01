import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CountdownTimer } from './componentes/CountdownTimer';
import DiogoBarbosa from './shared/fotos/diogo-barbosa.png';
import LucasSilva from './shared/fotos/lucas-silva.png';


function App() {

  return (
    <Box padding='10px'>
      <Box 
      width='100%'
      sx={{
        backgroundColor: 'primary.main', 
        color: 'primary.contrastText', 
        textAlign: 'center',
        padding: '5px'
      }}
      >
        <Typography variant='h2'>Tempo para o fim do contrato</Typography>
      </Box>
      <Grid container spacing={2}>
        <CountdownTimer
          data='December 31, 2023 23:59:59'
          nome='Diogo Barbosa'
          foto={DiogoBarbosa}
          descricaoFoto='Diogo Barbosa jogador do Grêmio'
        />
      </Grid>
      <Grid container spacing={2}>
        <CountdownTimer
          data='December 31, 2023 23:59:59'
          nome='Lucas Silva'
          foto={LucasSilva}
          descricaoFoto='Lucas Silva jogador do Grêmio'
        />
      </Grid>
    </Box>
  );
}

export default App;
