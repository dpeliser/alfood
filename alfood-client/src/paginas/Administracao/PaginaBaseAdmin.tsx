import { AppBar, Button, Container, Link, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const PaginaBaseAdmin = () => {

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography variant='h6'>
              Administracão
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Link component={RouterLink} to='/admin/restaurantes'>
                <Button sx={{ my: 2, color: 'white' }}>
                  Restaurantes
                </Button>
              </Link>
              <Link component={RouterLink} to='/admin/restaurantes/novo'>
                <Button sx={{ my: 2, color: 'white' }}>
                  Novo Restaurante
                </Button>
              </Link>
              <Link component={RouterLink} to='/admin/pratos'>
                <Button sx={{ my: 2, color: 'white' }}>
                  Pratos
                </Button>
              </Link>
              <Link component={RouterLink} to='/admin/pratos/novo'>
                <Button sx={{ my: 2, color: 'white' }}>
                  Novo Prato
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth='lg' sx={{ mt: 1 }}>
          <Paper sx={{ padding: 2 }}>
            <Outlet />
          </Paper>
        </Container>
      </Box>

    </>
  );
};

export default PaginaBaseAdmin;
