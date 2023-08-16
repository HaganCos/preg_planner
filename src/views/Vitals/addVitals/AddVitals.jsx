import { AddTask } from '@mui/icons-material'
import React from 'react'
import './AddVitals.css'
import { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

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
      <div className="Container">
        <h4>Click Button to Add Vitals</h4>
        <Button variant="contained" size="small" startIcon={<AddTask />}
          style={{ borderRadius: '2rem', width: '7.2rem' }}
          onClick={handleOpenDialog}>Vitals
        </Button>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth={'md'} fullWidth>
        <DialogTitle>Add Vitals</DialogTitle>
        <DialogContent>
          <TextField
            label="Temperature (°C)"
            fullWidth
            style={{ marginBottom: '1rem', marginTop: '0.5rem' }}
            color='primary'
          />
          <TextField
            label="Blood Pressure (mmHg)"
            fullWidth
            style={{ marginBottom: '1rem' }}
            color='error'
          />
          <TextField
            label="Weight (Kg)"
            fullWidth
            style={{ marginBottom: '1rem' }}
            color='success'
          />
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