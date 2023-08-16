import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel, DialogContentText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Table.css';

const DataTable = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [selectedRowId, setSelectedRowId] = React.useState(null);
  const [editedFields, setEditedFields] = React.useState({
    activite: '',
    facility: '',
    location: '',
    status: '',
  });

  const handleEditClick = (e, id, activite, facility, location, region, date, status) => {
    e.stopPropagation();
    setSelectedRowId(id);
    setEditedFields({ activite, facility, location, region, date, status });
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

  const getStatusBadge = (status) => {
    let color;
    switch (status) {
      case 'Pending':
        color = '#b8a75c';
        break;
      case 'Completed':
        color = '#77ba9c';
        break;
      case 'Cancelled':
        color = '#eb5083';
        break;
      default:
        color = 'gray';
    }

    return (
      <div style={{ display: 'inline-block', padding: '5px 10px', borderRadius: '10px', color: 'white', backgroundColor: color }}>
        {status}
      </div>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'activite', headerName: 'Purpose', width: 150 },
    { field: 'facility', headerName: 'Facility', width: 200 },
    { field: 'location', headerName: 'Location', width: 200 },
    { field: 'region', headerName: 'Region', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'status', headerName: 'Status', width: 130, renderCell: (params) => getStatusBadge(params.value) },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <>
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={(e) => handleEditClick(e, params.row.id, params.row.activite, params.row.facility, params.row.location, params.row.region, params.row.date, params.row.status)}>
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
    { id: 1, activite: 'Ultrasound Scan', facility: 'West View Medical Center', location: 'Airport Ridge', region: 'Western', date: '2023-01-06T10:30', status: 'Pending' },
    { id: 2, activite: 'Antenatal Meeting', facility: 'County Hospital', location: 'Airport Round About', region: 'Ashanti', date: '2023-09-02T12:30', status: 'Cancelled' },
    { id: 3, activite: 'Ultrasound Scan', facility: 'West View Medical Center', location: 'Airport Ridge', region: 'Western', date: '2023-09-06T11:30', status: 'Completed' },
    // ... other rows ...
  ];

  return (
    <div className="Table mbTable">
      <div style={{ height: 400, width: '100%' }}>
        <h3>Booked Appointment</h3>
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
                label="Purpose"
                fullWidth
                style={{ marginBottom: '1rem', marginTop: '0.5rem' }}
                value={editedFields.activite}
                onChange={(e) => setEditedFields({ ...editedFields, activite: e.target.value })}
              />
              <TextField
                label="Facility"
                fullWidth
                style={{ marginBottom: '1rem' }}
                value={editedFields.facility}
                onChange={(e) => setEditedFields({ ...editedFields, facility: e.target.value })}
              />
              <TextField
                label="Location"
                fullWidth
                style={{ marginBottom: '1rem' }}
                value={editedFields.location}
                onChange={(e) => setEditedFields({ ...editedFields, location: e.target.value })}
              />
              <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                <InputLabel>Region</InputLabel>
                <Select
                  label="Region"
                  value={editedFields.region}
                  onChange={(e) => setEditedFields({ ...editedFields, region: e.target.value })}
                >
                  <MenuItem value="Western">Western</MenuItem>
                  <MenuItem value="Greater Accra">Greater Accra</MenuItem>
                  <MenuItem value="Central">Central</MenuItem>
                  <MenuItem value="Ashanti">Ashanti</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Date"
                type="datetime-local"
                fullWidth
                style={{ marginBottom: '1rem' }}
                value={editedFields.date}
                onChange={(e) => setEditedFields({ ...editedFields, date: e.target.value })}
              />
              <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={editedFields.status}
                  label="Status"
                  onChange={(e) => setEditedFields({ ...editedFields, status: e.target.value })}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
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
