"use client"

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import Link from 'next/link';
import Title from '@/app/components/Title';
import { Checkbox, FormControlLabel } from '@mui/material';
const page = (params:any) => {
    console.log(params.params.id);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [isActive, setIsActive] = useState('');
    const [roles, setRoles] = useState('');
  return (
    <div style={{ marginLeft: '17rem', marginTop: '4.5rem', padding: '0px' }}> {/* Adjust margin to match sidebar width and marginTop to match header height */}
            <Title>Edit User</Title>
            <Grid container spacing={2}> {/* Use Grid container to wrap the text fields */}
                <Grid item xs={6}> {/* Specify the size of each text field */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name" size='small'
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}> {/* Specify the size of each text field */}
                    <TextField
                        margin="dense"
                        id="lastName"
                        label="Last Name" size='small'
                        fullWidth
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                {/* Repeat the above pattern for other pairs of text fields */}
                <Grid item xs={6}>
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email" size='small'
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone" size='small'
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Grid>
               
            </Grid>
            <div style={{ marginTop: '2rem', padding: '0px' }}>
                <h3>Roles</h3>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <FormControlLabel control={
                            <Checkbox
                                checked={true}

                                name="admin" />
                        } label="Admin" />

                    </Grid>
                    <Grid item xs={2}>
                        <FormControlLabel control={
                            <Checkbox
                                checked={false}

                                name="cro_user" />
                        } label="Cro_user" />

                    </Grid>
                    <Grid item xs={2}>
                        <FormControlLabel control={
                            <Checkbox
                                checked={true}

                                name="super_admin" />
                        } label="Super_admin" />

                    </Grid>
                    <Grid item xs={2}>
                        <FormControlLabel control={
                            <Checkbox
                                checked={false}

                                name="manufacturer" />
                        } label="Manufacturer" />

                    </Grid>
                    <Grid item xs={2}>
                        <FormControlLabel control={
                            <Checkbox
                                checked={true}

                                name="su" />
                        } label="Su" />

                    </Grid>
                    
                </Grid>
            </div>
            <DialogActions>
                <Link href={'/users'}>

                    <Button variant="contained" color="secondary" >Cancel</Button>
                </Link>
                <Button variant="contained" color="primary">
                    Update
                </Button>
            </DialogActions>
        </div>
  )
}

export default page