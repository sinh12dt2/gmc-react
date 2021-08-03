import { Helmet } from 'react-helmet';
import {
  Box,
  Container
} from '@material-ui/core';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        Product
      </Container>
    </Box>
  </>
);

export default ProductList;
