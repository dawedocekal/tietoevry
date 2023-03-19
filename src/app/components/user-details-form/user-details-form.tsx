import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { USER_DETAILS_SESSION_KEY } from 'src/app/constants/constants';
import SubmitButton from '../submit-button/submit-button';
import UserInfoSection from '../user-info-section/user-info-section';
import UserDescription from '../user-description/user-description';

type SubmitDataType = {
  firstname?: string,
  lastname?: string,
  zip?: string,
  city?: string,
  street?: string,
  phone?: string,
  email?: string,
  description?: string
}

const UserDetailsForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: SubmitDataType) => {
    sessionStorage.setItem(USER_DETAILS_SESSION_KEY, JSON.stringify(data));
    alert('Session storage updated');
  };

  return (
    <Box sx={{ mt: 5, background: '#f6fbfd', borderRadius: '5px', p: 4 }}>
      <Typography variant="h2" sx={{ fontSize: '32px' }}>
        Tell me something about yourself
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', my: 4 }}>
          <UserInfoSection control={control} errors={errors} />
          <UserDescription control={control} errors={errors} />
        </Box>
        <SubmitButton />
      </form>
    </Box>
  );
};

export default UserDetailsForm;
