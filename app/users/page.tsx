"use client"
import Title from '../components/Title';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: 'firstName', headerName: 'First Name', flex: 0.15, headerClassName: 'super-app-theme--header' },
  { field: 'lastName', headerName: 'Last Name', flex: 0.15, headerClassName: 'super-app-theme--header' },
  { field: 'email', headerName: 'Email',flex: 0.15, headerClassName: 'super-app-theme--header' },
  { field: 'phone', headerName: 'Phone',flex: 0.15, headerClassName: 'super-app-theme--header' },
  { field: 'isActive', headerName: 'IsActive', flex: 0.15, headerClassName: 'super-app-theme--header' },
  { field: 'roles', headerName: 'Roles', flex: 0.15, headerClassName: 'super-app-theme--header' },
  { field: 'organization', headerName: 'Organization', flex: 0.15, headerClassName: 'super-app-theme--header' },
  {
    field: 'edit',
    headerName: 'Action',
    width: 50, headerClassName: 'super-app-theme--header',
    renderCell: (params: any) => (
      <Link href={`/users/edit/${params.id}`}>
        <EditIcon />
      </Link>
    ),
  },
  {
    field: 'delete',
    headerName: '',headerClassName: 'super-app-theme--header',
    width: 80,
    renderCell: (params: any) => (
      <Link href={`/users/edit/${params.id}`}>
        <GridDeleteIcon />
      </Link>
    ),
  },
];

export default function Users(params: any) {
  console.log("userpage", params);
  const data = params.searchParams;

  const [open, setOpen] = useState(false);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [organization, setorganization] = useState('');
  const [isActive, setisActive] = useState('');
  const [roles, setroles] = useState('');
  const [showDataGrid, setShowDataGrid] = useState(true);
  const [showForm, setshowForm] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      isActive: true,
      roles: "Admin",
      organization: "XYZ Corporation"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      isActive: true,
      roles: "User",
      organization: "ABC Company"
    },


  ]
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleUser = () => {
    const newUser = {
      id: rows.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      isActive: true,
      roles: roles,
      organization: organization
    };

    setRows([...rows, newUser]);

    setfirstName('');
    setlastName('');
    setphone('');
    setorganization('');
    setroles('');
    setemail('');

    setShowDataGrid(!showDataGrid); // Toggle the visibility of DataGrid
    setshowForm(!showForm);
  }
  
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
      
        <div style={{marginLeft:'17rem',marginTop:'1.4rem'}}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' , paddingTop: '10px'}}>
                  <div>
                    <Title>Users</Title>
                  </div>
                  <div>
                    <Link href={'/users/add'}>
                      <Button variant="contained" color="primary" startIcon={<AddIcon />} style={{
                        backgroundColor: 'linear-gradient(to right, #03426F, #0391BA)',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px'
                      }}  >
                        Add User
                      </Button>
                    </Link>

                  </div>
                </div>
                {showDataGrid ? (
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} columnHeaderHeight={40} rowHeight={40} getRowId={(row: any) => generateRandom()} sx={{
                      '& .super-app-theme--header': {
                        backgroundColor: '#ddd',
                        color: 'black'
                      },
                    }} />
                  </div>
                ) : (
                  showForm && (
                    <>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="lastName"
                        label="lastName"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="email"
                        label="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="phone"
                        label="phone"
                        fullWidth
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="roles"
                        label="roles"
                        fullWidth
                        value={roles}
                        onChange={(e) => setroles(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="organization"
                        label="organization"
                        fullWidth
                        value={organization}
                        onChange={(e) => setorganization(e.target.value)}
                      />
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleToggleUser} color="primary">
                          Add
                        </Button>
                      </DialogActions>
                    </>
                  )
                )}
                

              </Paper>
            </Grid>
          </Grid>
          </div>
     

    </>
  );
}
