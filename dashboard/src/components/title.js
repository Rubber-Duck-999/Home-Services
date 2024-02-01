

import React from 'react';
import {
    Typography,
    Box
} from '@mui/material/';


export default function Title({ title }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: 80,
                backgroundColor: 'primary.dark'
            }}
        >
            <Typography align="center" variant="h3" component="div" padding='10px'
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    color: 'white'
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}