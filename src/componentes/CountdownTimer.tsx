import React, { useState, useEffect, memo } from 'react';
import { Box, Typography, Grid } from '@mui/material';

export interface ICountdownTimerProps {
    data: string;
    nome: string;
    foto: string;
    descricaoFoto: string;
}

// December 31, 2023 23:59:59
export const CountdownTimer: React.FC<ICountdownTimerProps> = memo(({
    data,
    nome,
    foto,
    descricaoFoto
}) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = new Date(data).toString(); // converte para string

    useEffect(() => {
        const interval = setInterval(() => {
            const time = calculateTimeRemaining(deadline);
            setDays(time.days);
            setHours(time.hours);
            setMinutes(time.minutes);
            setSeconds(time.seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    const calculateTimeRemaining = (endDate: any) => {
        const time = Date.parse(endDate) - Date.parse(new Date() as any);
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        return { days, hours, minutes, seconds };
    };
    return (
        <Grid item xs={12} md={12} lg={12} gap={3}>
            <Grid item xs={12} wrap='wrap'>
                <Box
                display='flex' 
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                >
                    <img src={foto} alt={descricaoFoto} />
                    <Typography variant="h4" align="center" gutterBottom>
                    {nome}
                </Typography>
                </Box>
            </Grid>
            <Grid 
            container
            display='flex' 
            alignItems='center' 
            flexDirection='row' 
            justifyContent='space-around'
            gap={1}
            wrap='wrap'
            >


                <Grid item xs={12} sm={12} lg={2} md={2}>
                    <Box
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: '10px',
                            textAlign: 'center',
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-around'

                        }}
                    >
                        <Typography variant="h2">{days < 10 ? `0${days}` : days}</Typography>
                        <Typography variant="h6">Dias</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={2} md={2}>
                    <Box
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: '10px',
                            textAlign: 'center',
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}
                    >
                        <Typography variant="h2">{hours < 10 ? `0${hours}` : hours}</Typography>
                        <Typography variant="h6">Horas</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={2} md={2}>
                    <Box
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: '10px',
                            textAlign: 'center',
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}
                    >
                        <Typography variant="h2">{minutes < 10 ? `0${minutes}` : minutes}</Typography>
                        <Typography variant="h6">Minutos</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={2} md={2}>
                    <Box
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: '10px',
                            textAlign: 'center',
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-around',
                            gap: 1
                        }}
                    >
                        <Typography variant="h2">{seconds < 10 ? `0${seconds}` : seconds}</Typography>
                        <Typography variant="h6">Segundos</Typography>
                    </Box>
                </Grid>

            </Grid>







        </Grid>

    )
})


