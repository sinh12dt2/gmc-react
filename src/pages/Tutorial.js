import { Helmet } from 'react-helmet';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Box, Container } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { getTutorials } from 'src/actions/tutorials';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const modalStyles = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const Tutorial = () => {
  // const dispatch = useDispatch();
  const mounted = useRef();
  // const tutorials = useSelector((state) => state.tutorials.list);
  // const [open, setOpen] = useState(false);
  // const [currentSelect, setCurrentSelect] = useState({});
  const classes = useStyles();
  useEffect(() => {
    if (!mounted.current) {
      // mounted
      // dispatch(getTutorials());
      mounted.current = true;
    } else {
      // updated
    }
  });
  // const openModal = (row) => {
  //   setOpen(true);
  //   setCurrentSelect(row);
  // };
  // const closeModal = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <Helmet>
        <title>Tutorial | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#ID</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {tutorials.map((row) => (
                  <TableRow key={row.id} onClick={() => openModal(row)}>
                    <TableCell> {row.id} </TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      {/* <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={modalStyles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit data modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { currentSelect.title }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { currentSelect.description }
          </Typography>
        </Box>
      </Modal> */}
    </>
  );
};

export default Tutorial;
