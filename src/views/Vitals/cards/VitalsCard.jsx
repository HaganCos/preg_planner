import React, { useState } from 'react';
import { VitalsDataCards } from '../../../data/Vitals';
import Card from '../../Dashboard/cards/card/Card';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const VitalsCard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleCardClick = (card) => {
    let content = '';

    if (card.title === 'Temperature') {
      content = `The average or normal body temperature for pregnant women is typically around 98.6°F (37°C). However, it's important to remember that individual body temperatures can vary, and minor fluctuations are normal. If you have concerns about your temperature during pregnancy, it's advisable to consult with a healthcare professional.`;
    } else if (card.title === 'Pressure') {
      content = `The average or normal blood pressure for pregnant women is generally below 120/80 mm Hg. However, it's essential to note that blood pressure can fluctuate during pregnancy, and what's considered normal can vary from person to person. Regular prenatal check-ups with a healthcare provider are crucial to monitor and ensure a healthy blood pressure range throughout pregnancy.`;
    } else if (card.title === 'Weight') {
      content = `There isn't a one-size-fits-all answer to the average or normal body weight for pregnant women, as it can vary based on factors such as pre-pregnancy weight, height, and overall health. However, on average, most healthcare providers recommend a weight gain of about 25 to 35 pounds (11 to 16 kg) for women with a healthy pre-pregnancy weight. It's important to have regular check-ups with your healthcare provider to ensure a healthy weight gain and pregnancy. They can provide personalized guidance based on your individual circumstances.`;
    }

    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="Cards">
      {VitalsDataCards.map((card) => (
        <div className="mainContainer" key={card.id}>
          <div onClick={() => handleCardClick(card)}>
          <Card 
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}

          />
          </div>
        </div>
      ))}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Alright</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VitalsCard;
