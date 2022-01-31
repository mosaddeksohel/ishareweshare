import * as React from 'react';
import Box from '@mui/material/Box';
import './Search.css'

import TextField from '@mui/material/TextField';

const SearchField = () => {

    return (
        <div className='search'>
            <Box
                sx={{
                    width: 500,
                    mx: 'auto',
                    marginTop: '1.5rem',
                    textAlign: 'center',
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label="search" id="fullWidth" />
            </Box>
        </div>
    );
};

export default SearchField;