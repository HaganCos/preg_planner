import React, { useState } from 'react';
import './AppointmentCards.css';
import { AppntCardsData } from '../../../data/Appointment';
import Card from './card/Card';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentCards = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCalendarDialog, setIsCalendarDialog] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpenFormDialog(true);

    if (card.title === 'Calendar') {
      setIsCalendarDialog(true); // Set the flag for "Calendar" card
    } else {
      setIsCalendarDialog(false); // Reset the flag for other cards
    }
  };

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false);
    setSelectedCard(null);
  };

  const dialogWidth = isCalendarDialog ? 'md' : 'sm';
  const [value, onChange] = useState(new Date());

  return (
    <div className="Cards">
      {AppntCardsData.map((card, id) => {
        return (
          <div className="mainContainer" key={id}>
            <div onClick={() => handleCardClick(card)}>
              <Card
                title={card.title}
                color={card.color}
                img={card.img}
                info={card.info}
                icon={card.icon}
              />
            </div>
          </div>
        );
      })}

      <Dialog
        open={openFormDialog}
        onClose={handleCloseFormDialog}
        maxWidth={dialogWidth}
        fullWidth
      >
        <DialogTitle>{selectedCard ? ` ${selectedCard.title}` : 'Add New Record'}</DialogTitle>
        <DialogContent>
          {isCalendarDialog ? (
            <Calendar fullWidth onChange={onChange} value={value} style={{ background: 'red' }} />
          ) : (
            <>
              <TextField
                label="Purpose"
                fullWidth
                style={{ marginBottom: '1rem', marginTop: '1rem' }}
              />
              <TextField
                label="Facility"
                fullWidth
                style={{ marginBottom: '1rem' }}
              />
              <TextField
                label="Location"
                fullWidth
                style={{ marginBottom: '1rem' }}
              />
              <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                <InputLabel>Region</InputLabel>
                <Select
                  label="Region"
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
              />
              <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFormDialog} color="warning">
            Cancel
          </Button>
          <Button onClick={handleCloseFormDialog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AppointmentCards;
