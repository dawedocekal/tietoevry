import { Container, Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth="sm">
      <Typography variant='h1' sx={{fontSize: '48px', my: 4, textAlign: 'center'}}>Contact Tietoevry</Typography>
      <Box>{children}</Box>
    </Container>
  );
};

export default Layout;
