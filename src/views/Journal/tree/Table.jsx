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
    date: '',
    experience: '',
    symptoms: '',
    description: '',
    status: '',
  });

  const handleEditClick = (e, id, date, experience, symptom, description, status) => {
    e.stopPropagation();
    setSelectedRowId(id);
    setEditedFields({date, experience, symptom, description, status });
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
      case 'Severe':
        color = '#eb5083';
        break;
      default:
        color = '#c572cf';
    }

    return (
      <div style={{ display: 'inline-block', padding: '5px 10px', borderRadius: '10px', color: 'white', backgroundColor: color }}>
        {status}
      </div>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'experience', headerName: 'Experience', width: 170 },
    { field: 'symptoms', headerName: 'Symptom', width: 230 },
    { field: 'description', headerName: 'Description', width: 280 },
    { field: 'status', headerName: 'Status', width: 150, renderCell: (params) => getStatusBadge(params.value) },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <>
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={(e) => handleEditClick(e, params.row.id, params.row.date, params.row.experience, params.row.symptoms, params.row.description, params.row.status)}>
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
    { id: 1, date: '2023-01-06T03:30', experience: 'Physical', symptoms: 'Nausea, Back pain', description: 'Continuous vomting and Frequent Urinating', status: 'Severe' },
    { id: 2, date: '2023-01-06T07:30', experience: 'Emotional', symptoms: 'food cravings, aversions', description: 'Feeling for spicey food and ice-cream', status: 'Discomfort' },
    // ... other rows ...
  ];

  return (
    <div className="Table mbTable">
      <div style={{ height: 400, width: '100%' }}>
        <h3>Taken Journals</h3>
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
            <DialogTitle>Edit Journal</DialogTitle>
            <DialogContent>
              <TextField
                label="Date"
                type="datetime-local"
                fullWidth
                style={{ marginBottom: '1rem', marginTop: '0.5rem' }}
                value={editedFields.date}
                onChange={(e) => setEditedFields({ ...editedFields, date: e.target.value })}
              />
              <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                <InputLabel>Experience</InputLabel>
                <Select
                  label="Experience"
                  value={editedFields.experience}
                  onChange={(e) => setEditedFields({ ...editedFields, experience: e.target.value })}
                >
                  <MenuItem value="Physical">Physical</MenuItem>
                  <MenuItem value="Emotional">Emotional</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Symptoms"
                fullWidth
                style={{ marginBottom: '1rem' }}
                value={editedFields.symptoms}
                onChange={(e) => setEditedFields({ ...editedFields, symptoms: e.target.value })}
              />

              <TextField
                label="description"
                fullWidth
                style={{ marginBottom: '1rem' }}
                value={editedFields.description}
                onChange={(e) => setEditedFields({ ...editedFields, description: e.target.value })}
              />
              <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={editedFields.status}
                  label="Status"
                  onChange={(e) => setEditedFields({ ...editedFields, status: e.target.value })}
                >
                  <MenuItem value="Severe">Severe</MenuItem>
                  <MenuItem value="Discomfort">Discomfort</MenuItem>
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