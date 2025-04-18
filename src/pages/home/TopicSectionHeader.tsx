
import { Typography } from "@mui/material";

export function TopicSectionHeader({ title }: {title: string}) {
  return (
    <Typography
      variant="h5"
      sx={{
        color: 'primary.main',
        borderBottom: 2,
        borderColor: 'primary.main',
        mb: 2,
        pb: 1,
      }}
    >
      {title}
    </Typography>
  );
}