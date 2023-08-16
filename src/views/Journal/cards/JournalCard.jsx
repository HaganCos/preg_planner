import React, { useState } from 'react';
import { JournCard } from '../../../data/JournalCard';
import JCard from './card/Card';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';

const JournalCard = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="Cards">
      {JournCard.map((card, id) => {
        return (
          <div className="mainContainer" key={id}>
            <div onClick={() => handleCardClick()}>
              <JCard
                // title={card.title}
                color={card.color}
                img={card.img}
                info={card.info}
                icon={card.icon}
              />
            </div>
          </div>
        );
      })}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Keeping a journal during pregnancy can be quite useful for various reasons:
         1. **Emotional Expression:** A journal provides an outlet to express your emotions, fears, and joys during this transformative time. <br />
          2. **Health Tracking:** Documenting symptoms, appointments, and changes can help you and your healthcare provider monitor your well-being.<br />
          3. **Memorable Moments:** Capture memories, cravings, and experiences that you can fondly look back on with your child in the future. <br />
          4. **Personal Reflection:** Writing encourages self-reflection, helping you understand your thoughts and priorities as you approach motherhood.<br />
          5. **Planning and Preparation:** Use your journal to note down baby names, nursery ideas, and important to-do lists for a smoother pregnancy journey.<br /> <br />
            Remember, there's no right or wrong way to keep a pregnancy journal. You can write as frequently as you like and include whatever feels important to you. It's a personal journey, so make it meaningful in a way that suits you best.Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Alright</Button>
        </DialogActions>
      </Dialog> 
    </div>
  );
}

export default JournalCard