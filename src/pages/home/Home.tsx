import { Box, Grid, Typography } from '@mui/material';
import { Calculator, GitBranch, Grid3X3, PieChart, Spline } from 'lucide-react';
import { TopicSectionHeader } from '@/pages/home/TopicSectionHeader';
import TopicCard from './TopicCard';
import { ARITHMETIC, DIFFERENTIAL_CALCULUS, GAME_THEORY, GRAPH_THEORY, INTEGRAL_CALCULUS, LINEAR_ALGEBRA, VECTOR_CALCULUS } from '@/Router';

// Should match the existingNotes.json file
const sections = [
  {
    title: 'Foundational Mathematics',
    cards: [
      {
        title: 'Arithmetic',
        icon: <Calculator />,
        description: 'Integers, divisibility, factorization, primes, operations, roots; estimation, percent, ratio, absolute value, sequences.',
        path: ARITHMETIC,
      },
      {
        title: 'Elementary Algebra',
        icon: <Spline />,
        description: 'Exponents, factoring, simplifying expressions; relations, functions, equations, inequalities; solving linear/quadratic equations; coordinate geometry basics.',
        path: "",
      },
      {
        title: 'Geometry',
        icon: <Grid3X3 />,
        description: 'Lines, circles, triangles, polygons, congruence/similarity, 3D figures, area, perimeter, volume; Pythagorean theorem and basic angle measurements.',
        path: "",
      },
      {
        title: 'Statistics & Probability',
        icon: <PieChart />,
        description: 'Descriptive statistics, data interpretation; probability of events, distributions, (basic) counting methods like combinations and permutations.',
        path: "",
      },
    ],
  },
  {
    title: 'Discrete Mathematics',
    cards: [
      {
        title: 'Basic Set Theory',
        icon: <GitBranch />,
        description: '',
        path: "",
      },
      {
        title: 'Counting & Combinatorics',
        icon: <Calculator />,
        description: '',
        path: "",
      },
      {
        title: 'Teoría de grafos',
        icon: <GitBranch />,
        description: '',
        path: GRAPH_THEORY,
      },
      {
        title: 'Teoría de juegos',
        icon: <Spline />,
        description: '',
        path: GAME_THEORY,
      },
    ],
  },
  {
    title: 'Matemática Universitaria',
    cards: [
      {
        title: 'Cálculo Diferencial',
        icon: <Spline />,
        description: '',
        path: DIFFERENTIAL_CALCULUS,
      },
      {
        title: 'Cálculo Integral',
        icon: <Spline />,
        description: '',
        path: INTEGRAL_CALCULUS,
      },
      {
        title: 'Cálculo Vectorial',
        icon: <Spline />,
        description: '',
        path: VECTOR_CALCULUS,
      },
      {
        title: 'Álgebra Lineal',
        icon: <Grid3X3 />,
        description: '',
        path: LINEAR_ALGEBRA,
      },
    ],
  },
];

export default function MathematicsLanding() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4, px: 2 }}>
      <Typography 
        variant="h3" 
        align="center" 
        mb={4}
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
          },
        }}
      >
        Fede&apos;s Maths Notes
      </Typography>

      {sections.map(({ title, cards }) => (
        <Box key={title} mb={6}>
          <TopicSectionHeader title={title} />
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item xs={12} md={6} lg={3} key={card.title}>
                <TopicCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
