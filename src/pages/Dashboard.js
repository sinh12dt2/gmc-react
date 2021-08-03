import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getMembers } from 'src/actions/welcome';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Dashboard = () => {
  const dispatch = useDispatch();
  const welcome = useSelector((state) => state.welcome);
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // mounted
      dispatch(getMembers());
      mounted.current = true;
    } else {
      // updated
    }
  });
  return (
    <>
      <Helmet>
        <title>Dashboard | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Typography
            align="center"
            gutterBottom
            variant="h4"
          >
            { welcome.title }
          </Typography>
          <TableContainer component={Paper} className="u-mt-20">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {welcome.members.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell> {row.id} </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
