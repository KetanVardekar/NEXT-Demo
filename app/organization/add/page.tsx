"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import Title from '@/app/components/Title';
import AddIcon from '@mui/icons-material/Add';
const columns = [
    { field: 'user', headerName: 'User', flex: 0.20, headerClassName: 'super-app-theme--header' },
    { field: 'firstName', headerName: 'First Name', flex: 0.25, headerClassName: 'super-app-theme--header' },
    { field: 'lastName', headerName: 'Last Name', flex: 0.25, headerClassName: 'super-app-theme--header' },
    {
        field: 'delete',
        headerName: '', headerClassName: 'super-app-theme--header',
        flex: 0.025,
        renderCell: (params: any) => (
            <Link href={`/users/edit/${params.id}`}>
                <GridDeleteIcon />
            </Link>
        ),
    },
];
const rows = [
    {
        id: 1,
        user: 'MichaelJason',
        firstName: "Michael",
        lastName: "Jason",

    },
    {
        id: 2,
        user: 'DrakeJason',
        firstName: "Drake",
        lastName: "Jason",

    },
    {
        id: 3,
        user: 'JohnDoe',
        firstName: "John",
        lastName: "Doe",
    },
    {
        id: 4,
        user: 'JaneDoe',
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        id: 5,
        user: 'AliceSmith',
        firstName: "Alice",
        lastName: "Smith",
    }   

]
const AddOrganization = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactName, setContactName] = useState('');


    return (
        <div style={{ marginLeft: '17rem', marginTop: '5rem', padding: '0px' }}>
            <Title>Add Organization</Title>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        size='small'
                        label="name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}> {/* Specify the size of each text field */}
                    <TextField
                        margin="dense"
                        size='small'
                        id="Description"
                        label="Description"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        size='small'
                        id="website"
                        label="website"
                        fullWidth
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        size='small'
                        id="contactEmail"
                        label="contact Email"
                        fullWidth
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        size='small'
                        id="contactPhone"
                        label="contact Phone"
                        fullWidth
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        size='small'
                        id="contactName"
                        label="contact Name"
                        fullWidth
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                    />
                </Grid>

            </Grid>



            <div style={{ height: 400, width: '100%', marginTop: '3rem' }}>
                <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                    Add User to Organization
                </Button>
                <div style={{marginTop:'1rem'}}>
                <DataGrid rows={rows} columns={columns} columnHeaderHeight={40} rowHeight={40} sx={{
                    '& .super-app-theme--header': {
                        backgroundColor: '#D5D4D4',
                        color: 'black'
                    },
                }} />
                </div>
            </div>
            <div style={{marginTop:'2rem'}}>
            <DialogActions>
                <Link href={'/organization'}>
                    <Button variant="contained" color="secondary" >Cancel</Button>
                </Link>
                <Link href={{
                    pathname: '/organization',

                }} >
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Link>
            </DialogActions>

            </div>
        </div>

    );
};

export default AddOrganization;
