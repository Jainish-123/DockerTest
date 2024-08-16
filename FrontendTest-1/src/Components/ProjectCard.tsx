import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Project } from '../Interfaces/Project';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg rounded-lg overflow-hidden border border-gray-600">
            <CardContent>
                <Box className="flex justify-between items-center">
                    <Typography variant="h5" className="font-bold text-blue-400">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                        Updated on : {project.updatedOn}
                    </Typography>
                </Box>
                <Box className="flex justify-between items-center">
                    <Typography variant="body2" component="p" className="mt-4 text-gray-300">
                        {project.description}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}

export default ProjectCard;