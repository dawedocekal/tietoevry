import { Button } from '@mui/material';

const SubmitButton = () => {
  return (
    <Button
      sx={{
        width: '150px',
        mt: 4,
        mx: 'auto',
        display: 'block',
        background: '#EACBBB',
        color: '#000',
        fontWeight: 700,
        '&:hover': {
          background: '#F7EAE4',
        },
      }}
      type="submit"
    >
      SEND
    </Button>
  );
};

export default SubmitButton;
