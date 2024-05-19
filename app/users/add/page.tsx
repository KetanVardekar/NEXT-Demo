"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation'
import Title from '@/app/components/Title';
import { Checkbox, FormControlLabel } from '@mui/material';
const Page = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [roles, setRoles] = useState('');

    // Function to handle adding user
    const addUser = () => {
        // Prepare user data object
        const userData = {
            id: 4,
            firstName,
            lastName,
            email,
            phone,
            organization,
            roles
        };
        console.log(userData);

    };

    return (
        <div style={{ marginLeft: '17rem', marginTop: '5rem', padding: '0px' }}>
            <Title>Add User</Title>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        autoFocus size='small'
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}> {/* Specify the size of each text field */}
                    <TextField
                        margin="dense" size='small'
                        id="lastName"
                        label="Last Name"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                {/* Repeat the above pattern for other pairs of text fields */}
                <Grid item xs={6}>
                    <TextField
                        margin="dense" size='small'
                        id="email"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="dense" size='small'
                        id="phone"
                        label="Phone"
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
                    <Button variant="contained" color="secondary">Cancel</Button>
                </Link>
                <Link href={{
                    pathname: '/users',
                    query: {
                        id: 5,
                        firstName,
                        lastName,
                        email,
                        phone,
                        organization,
                        roles
                    }
                }} >
                    <Button variant="contained" color="primary" onClick={addUser}>
                        Save
                    </Button>
                </Link>
            </DialogActions>
        </div>
    );
};

export default Page;
