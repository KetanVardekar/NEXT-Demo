"use client"

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import Link from 'next/link';
import Title from '@/app/components/Title';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';

const columnForRole = [
    { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header' },
    {
        field: 'check1',
        headerName: 'Read Only',
        flex: 0.15, headerClassName: 'super-app-theme--header',
        renderCell: (params: any) => (
            <Checkbox
                checked={params.value}

            />
        ),
    },
    {
        field: 'check2',
        headerName: 'Full Access',
        flex: 0.15, headerClassName: 'super-app-theme--header',
        renderCell: (params: any) => (
            <Checkbox
                checked={params.value}

            />
        ),
    },
    {
        field: 'data1',
        headerName: 'Resource Id',
        flex: 0.15,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'data2',
        headerName: 'Resource Type',
        flex: 0.15,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'description',
        headerName: 'Description',
        flex: 0.15,
        headerClassName: 'super-app-theme--header'
    },
];

const rowsForRole = [
    { id: 1, check1: true, check2: false, data1: 'User', data2: 'page', description: 'Description 1' },
    { id: 2, check1: false, check2: true, data1: 'Dashboard', data2: 'page', description: 'Description 2' },
    { id: 3, check1: true, check2: true, data1: 'Treatment', data2: 'page', description: 'Description 3' },
    { id: 4, check1: false, check2: false, data1: 'Manufacturing', data2: 'page', description: 'Description 4' },
    // Add more rows as needed
];
const EditRole = (params: any) => {
    console.log(params.params.id);

    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    function generateRandom() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    return (
        <>
            <div style={{ marginLeft: '17rem', marginTop: '5rem', padding: '0px' }}> {/* Adjust margin to match sidebar width and marginTop to match header height */}
                <Title>Edit Role</Title>
                <Grid container spacing={2}> {/* Use Grid container to wrap the text fields */}
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            size='small'
                            id="Code"
                            label="Code"
                            fullWidth
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}> {/* Specify the size of each text field */}
                        <TextField
                            margin="dense"
                            id="desctiption"
                            size='small'
                            label="description"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>

                </Grid>

            </div>
            <div style={{ marginLeft: '17rem', marginTop: '2rem', padding: '0px' }}>
            <h3>Access</h3>
                <DataGrid rows={rowsForRole} columns={columnForRole} columnHeaderHeight={40} rowHeight={40} getRowId={(row: any) => generateRandom()} sx={{
                    '& .super-app-theme--header': {
                        backgroundColor: '#D5D4D4',
                        color: 'black'
                    },
                }} />

            </div>
            <div style={{ marginTop: '2rem' }}>
                <DialogActions>
                    <Link href={'/roles'}>
                        <Button variant="contained" color="secondary">Cancel</Button>
                    </Link>
                    <Link href={{
                        pathname: '/roles',

                    }} >
                        <Button variant="contained" color="primary">
                            Save
                        </Button>
                    </Link>
                </DialogActions>
            </div>
        </>
    )
}

export default EditRole