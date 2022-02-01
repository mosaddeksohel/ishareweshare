import { Input, TextField } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';

const AddVideos = () => {
    const [title, setTitle] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [video, setVideo] = React.useState(null);

    const handleSubmit = e => {
        e.prevenDefault();
        if (video) {
            return
        }
        const formData = new FormData();
        formData.append('title', title)
        formData.append('Description', Description)
        formData.append('video', video)

        fetch('http://localhost:5000/videos', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    required
                    onClick={e => setTitle(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    label="Description"
                    onClick={e => setDescription(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    accept="video/*"
                    onChange={e => setVideo(e.target.files)}
                    id="contained-button-file"
                    multiple type="file" />
                <Button variant="contained" type="submit">
                    Upload
                </Button>

            </form>

        </div >
    );
};

export default AddVideos;