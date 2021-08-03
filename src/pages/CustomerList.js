import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        Customer
      </Container>
    </Box>
  </>
);

export default CustomerList;
