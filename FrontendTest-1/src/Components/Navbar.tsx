import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" className="bg-gradient-to-r from-black to-blue-800 shadow-lg">
            <Toolbar className="flex justify-between px-4">
                <Typography variant="h6" className="text-white font-bold">
                    CollabHub
                </Typography>
                <div>
                    <Button color="inherit" className="text-white mx-2">
                        Home
                    </Button>
                    <Button color="inherit" className="text-white mx-2">
                        About
                    </Button>
                    <Button color="inherit" className="text-white mx-2">
                        Contact
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
