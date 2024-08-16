import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import ProjectCard from '../Components/ProjectCard';
import SearchBar from '../Components/SearchBar';
import Stats from '../Components/Stats';
import { Project } from '../Interfaces/Project';
import { Box, Grid, useMediaQuery, useTheme, Button, Modal, Typography } from '@mui/material';
import NewProjectForm from '../Components/ProjectForm';

const ProjectPage: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isSmallScreen);
    const [projects, setProjects] = useState<Project[]>([
        { title: 'Project 1', description: 'Description for project 1', updatedOn: '2024-06-01', technologies: '' },
        { title: 'Project 2', description: 'Description for project 2', updatedOn: '2024-06-02', technologies: '' },
    ]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addNewProject = (project: Project) => {
        setProjects([...projects, project]);
        handleClose();
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <Box className="container mx-auto px-4 py-6">
                <Box className="bg-gray-800 p-4 rounded-md shadow-md mb-6 border border-gray-700">
                    <Grid container spacing={2} className="mb-4" alignItems="center">
                        <Grid item xs={12} md={10}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={12} md={2} className="flex justify-end">
                            <Button
                                variant="contained"
                                className="bg-gradient-to-r from-blue-600 to-black text-white rounded-md shadow-md"
                                style={{ height: '40px', minWidth: '100px' }}
                                onClick={handleOpen}>
                                Create New
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stats />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box className="bg-white p-4 rounded-md shadow-md mx-auto my-6 max-w-lg">
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New Project
                    </Typography>
                    <NewProjectForm onSubmit={addNewProject} />
                </Box>
            </Modal>
        </div>
    );
};

export default ProjectPage;
