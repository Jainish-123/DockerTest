import React from 'react';
import { TextField, Box } from '@mui/material';
import { styled } from '@mui/system';

const SearchBar: React.FC = () => {
    const StyledTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& .MuiInputBase-root': {
            backgroundColor: '#1f2937',
            color: 'white',
            height: '40px',
        },
        '& .MuiInputBase-input': {
            padding: '10px 14px',
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'white',
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
    });
    return (
        <Box className="flex justify-between items-center my-6 space-x-4">
            <StyledTextField
                label="Find..."
                variant="outlined"
                className="flex-grow"
            />
        </Box>
    );
};

export default SearchBar;
