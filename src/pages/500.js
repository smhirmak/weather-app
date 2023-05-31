import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Custom500() {
  return (
    <Container>
      <Box className="flex flex-col justify-center items-center mt-24">
        <Typography variant="h2">Oppss..</Typography>
        <Typography variant="h2">Internal Server Error</Typography>
        <Link href="/">
          <Button variant="outlined" size="large" className="mt-8">
            Go Home Page
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
