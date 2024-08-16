import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MnemonicCard({index, word }) {
  return (
    <Stack className='p-2' direction="row" spacing={5}>
      <Chip label={`${index}. ${word}`}  />
    </Stack>
  );
}