import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography id = "copy" variant="body1" color="inherit">
              &copy; Nashat 2021
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
}

export default Footer;