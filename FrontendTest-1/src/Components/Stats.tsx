import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Stats: React.FC = () => {
    return (
        <Card className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 shadow-lg rounded-lg overflow-hidden border border-gray-600">
            <CardContent>
                <Typography variant="h5" className="font-bold text-blue-400">
                    Stats
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Stats;