import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  path: string;
}

export default function TopicCard({ title, icon, description, path }: TopicCardProps) {
  return (
    <Card
      component={Link}
      to={path}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
        transition: 'box-shadow 0.3s',
        ':hover': { boxShadow: 6 },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton sx={{ bgcolor: 'primary.light', color: 'primary.main', mr: 1 }}>
            {icon}
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, color: 'primary.main' }}>
        <Typography variant="body2">View notes</Typography>
        <ChevronRight />
      </Box>
    </Card>
  );
}