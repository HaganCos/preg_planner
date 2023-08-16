import { AddTask } from '@mui/icons-material'
import React from 'react'
import './AddJournal.css'
import { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const AddVitals = () => {

  const [openDialog, setOpenDialog] = useState(false)

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  
  const handleSaveDialog = () =>{
    setOpenDialog(false);
    //Save Action goes here...
  }

  const handleCloseDialog = () =>{
    setOpenDialog(false);
  }

  return (
    <>
      <div className="Container journal">
        <h4>Click Button to Add Journal</h4>
        <Button color="success" variant="contained" size="small" startIcon={<AddTask />}
          style={{ borderRadius: '2rem', width: '7.2rem' }}
          onClick={handleOpenDialog}>Journal
        </Button>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth={'md'} fullWidth>
        <DialogTitle>Add Journal</DialogTitle>
        <DialogContent>
          <TextField
            label="Date"
            type="datetime-local"
            fullWidth
            style={{ marginBottom: '1rem', marginTop: '0.5rem' }}
          />
          <FormControl fullWidth style={{ marginBottom: '1rem' }}>
            <InputLabel>Experience</InputLabel>
            <Select
              label="Experience"
            >
              <MenuItem value="Physical">Physical</MenuItem>
              <MenuItem value="Emotional">Emotional</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Symptoms"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="description"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />
          <FormControl fullWidth style={{ marginBottom: '1rem' }}>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
            >
              <MenuItem value="Severe">Severe</MenuItem>
              <MenuItem value="Discomfort">Discomfort</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="warning">
            Cancel
          </Button>
          <Button onClick={handleSaveDialog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddVitals