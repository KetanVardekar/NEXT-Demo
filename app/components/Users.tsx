import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.15 },
  { field: 'date', headerName: 'Date', flex: 0.15 },
  { field: 'name', headerName: 'Name', flex: 0.15 },
  { field: 'shipTo', headerName: 'Address', flex: 0.15 },
  { field: 'paymentMethod', headerName: 'Payment Method', flex: 0.15 },
  { field: 'amount', headerName: 'Sale Amount', flex: 0.15 },
];

const rows = [
  { id: 1, date: '2024-05-15', name: 'John Doe', shipTo: '123 Main St, Anytown, USA', paymentMethod: 'Credit Card', amount: 100 },
  { id: 2, date: '2024-05-16', name: 'Jane Smith', shipTo: '456 Oak Ave, Sometown, USA', paymentMethod: 'PayPal', amount: 150 },
  { id: 3, date: '2024-05-17', name: 'Bob Johnson', shipTo: '789 Elm St, Othertown, USA', paymentMethod: 'Cash', amount: 80 },

];

const UserTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns} columnHeaderHeight={40} rowHeight={40}
        
      />
    </div>
  );
};

export default UserTable;
