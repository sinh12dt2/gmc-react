import { useState } from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TableCustom = (data = [], headers = {}) => {
  const [open, setOpen] = useState(false);
  const [rowDataSelect, setDataSelect] = useState({});
  const classes = useStyles();
  const openModal = (rowData) => {
    setOpen(true);
    setDataSelect(rowData);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((row) => (
                <>
                  <TableCell>{ row }</TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} onClick={openModal(row)}>
                <TableCell> {row.id} </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={modalStyles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { rowDataSelect.description }
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default TableCustom;
