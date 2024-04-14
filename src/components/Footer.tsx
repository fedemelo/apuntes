import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer">
      <Container maxWidth="sm">
        <Typography variant="body1" color="text.secondary" align="center">
          © {new Date().getFullYear()} Federico Melo Barrero
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          Todos los apuntes son propiedad de su autor.
        </Typography>
      </Container>
    </Box>
  );
};