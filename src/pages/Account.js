import { Helmet } from 'react-helmet';
import {
  Box,
  Container
} from '@material-ui/core';

const Account = () => (
  <>
    <Helmet>
      <title>Account | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        Account
      </Container>
    </Box>
  </>
);

export default Account;
