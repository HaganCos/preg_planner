import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, DialogContentText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './VitalsTable.css';

const DataTable = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [selectedRowId, setSelectedRowId] = React.useState(null);
  const [editedFields, setEditedFields] = React.useState({
    temperature: '',
    pressure: '',
    weight: '',
  });

  const handleEditClick = (e, id, temperature, pressure, weight) => {
    e.stopPropagation();
    setSelectedRowId(id);
    setEditedFields({ temperature, pressure, weight});
    setOpenEditDialog(true);
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    setSelectedRowId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    setOpenDeleteDialog(false);
    // do whatever you want to delete the row with the selectedRowId
  };

  const handleConfirmEdit = () => {
    setOpenEditDialog(false);
    // do whatever you want to edit the row with the selectedRowId using the editedFields state
  };

  const handleCloseDialogs = () => {
    setOpenDeleteDialog(false);
    setOpenEditDialog(false);
    setSelectedRowId(null);
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'temperature', headerName: 'Temperature (°C)', width: 250 },
    { field: 'pressure', headerName: 'Blood Pressure (mmHg)', width: 250 },
    { field: 'weight', headerName: 'Weight (Kg)', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <>
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={(e) => handleEditClick(e, params.row.id, params.row.temperature, params.row.pressure, params.row.weight)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={(e) => handleDeleteClick(e, params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  const rows = [
    { id: 1, date: '2023-01-06T03:30', temperature: 50, pressure: 89, weight: 15 },
    { id: 2, date: '2023-04-09T12:30', temperature: 80, pressure: 103, weight: 14 },
    { id: 3, date: '2023-05-16T08:30', temperature: 60, pressure: 90, weight: 18 },
    // ... other rows ...
  ];

  return (
    <div className="Table vTable">
      <div style={{ height: 400, width: '100%' }}>
        <h3>Vitals Recorded</h3>
        <DataGrid
          style={{ boxShadow: '5px 15px 20px #80808050', background: 'white', borderRadius: '1.2rem' }}
          rows={rows}
          columns={columns}
          pageSize={5}
          pagination
        />
      </div>

      <Dialog
        open={openDeleteDialog || openEditDialog}
        onClose={handleCloseDialogs}
        maxWidth={openEditDialog ? "md" : false}
        fullWidth={openEditDialog}
      >
        {openDeleteDialog && (
          <>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the selected record?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialogs} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete} color="error">
                Delete
              </Button>
            </DialogActions>
          </>
        )}
        {openEditDialog && (
          <>
            <DialogTitle>Edit Record</DialogTitle>
            <DialogContent>
              <TextField
                label="Temperature (°C)"
                fullWidth
                style={{ marginBottom: '1rem', marginTop: '0.5rem' }}
                value={editedFields.temperature}
                color='primary'
                onChange={(e) => setEditedFields({ ...editedFields, temperature: e.target.value })}
              />
              <TextField
                label="Blood Pressure (mmHg)"
                fullWidth
                style={{ marginBottom: '1rem' }}
                color='error'
                value={editedFields.pressure}
                onChange={(e) => setEditedFields({ ...editedFields, pressure: e.target.value })}
              />
              <TextField
                label="Weight (Kg)"
                fullWidth
                style={{ marginBottom: '1rem' }}
                color='success'
                value={editedFields.weight}
                onChange={(e) => setEditedFields({ ...editedFields, weight: e.target.value })}
              />

            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialogs} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleConfirmEdit} color="primary">
                Update
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default DataTable;
