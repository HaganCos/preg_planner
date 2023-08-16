import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  date: string,
  experience: '',
  symptoms: string,
  duration: string,
  action: string,
  status: string,
) {
  return { date, experience, symptoms, duration, action, status };
}

const rows = [
 createData('2023-06-20', 'Physical', "Nausea", "Few Hours", "Medication", "Severe"),
 createData('2023-06-16', 'Physical', "Headache", "Few Hours", "Medication", "Discomfort"),
 createData('2023-06-15', 'Physical', "Back Pain", "All Day", "Medication", "Severe"),
 createData('2023-06-20', 'Physical', "Nausea", "Few Hours", "Medication", "Severe"),
 createData('2023-06-16', 'Physical', "Headache", "Few Hours", "Medication", "Discomfort"),
 createData('2023-06-15', 'Physical', "Back Pain", "All Day", "Medication", "Severe"),

];

const makeStyles = (status) => {
  if (status === 'Severe') {
    return {
      background: '#eb5083',
      color: 'white',
    };
  } else {
    return {
      background: '#c572cf',
      color: 'white',
    };
  }
};


export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Symptoms</h3>
      <TableContainer component={Paper}
        style={{ boxShadow: '5px 15px 20px #80808050', borderRadius:'1.2rem' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Experience</TableCell>
              <TableCell align="left">Symtoms</TableCell>
              <TableCell align="left">Duration</TableCell>
              <TableCell align="left">Action</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.experience}</TableCell>
                <TableCell align="left">{row.symptoms}</TableCell>
                <TableCell align="left">{row.duration}</TableCell>
                <TableCell align="left">{row.action}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>

  );
}