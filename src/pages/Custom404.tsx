import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Custom404() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', margin: 8 }} >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ fontSize: '2rem' }}>
        No los encontré :(
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1rem', my: 4 }}>
        Lo lamento, no tengo apuntes sobre este tema todavía.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1rem', mb: 4 }}>
        Puede que no los haya subido aún o simplemente que jamás haya estudiado esto.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1rem', mb: 4 }}>
        Iré subiendo todos mis apuntes a medida que pueda revisarlos y completarlos. Algunos están más depurados que otros y estarán disponibles para todos más pronto, pero tarde o temprano todos estarán en esta página!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/apuntes/"
        sx={{ mt: 4 }}
      >
        Volver al inicio
      </Button>
    </Container>
  );
}