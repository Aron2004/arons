import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Hello</Button>
      <Button variant="contained">Boxed</Button>
      <Button variant="outlined">Lined</Button>
    </Stack>
  )

}