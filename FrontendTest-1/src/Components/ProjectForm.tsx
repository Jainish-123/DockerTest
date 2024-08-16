import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Project } from '../Interfaces/Project';
import { toast } from 'react-toastify';

interface NewProjectFormProps {
    onSubmit: (project: Project) => void;
}

const ProjectForm: React.FC<NewProjectFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProject: Project = {
            title,
            description,
            technologies,
            updatedOn: new Date().toISOString().split('T')[0],
        };
        toast.success("Project added successfull");
        onSubmit(newProject);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Technologies"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                margin="normal"
                required
            />
            <Box className="flex justify-end mt-4">
                <Button variant="contained" color="primary" type="submit">
                    Upload Project
                </Button>
            </Box>
        </Box>
    );
};

export default ProjectForm;
