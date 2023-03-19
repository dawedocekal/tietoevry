import { getErrorHelperText } from 'src/app/utilities/utilities';
import { Control } from 'react-hook-form/dist/types';
import { Controller } from 'react-hook-form';
import { FORM_DESCRIPTION_ELEMENT } from 'src/app/constants/constants';
import { TextareaAutosize, FormLabel, FormHelperText } from '@mui/material';

interface UserDescriptionProps {
  control: Control;
  errors: any;
}

const UserDescription = ({ control, errors }: UserDescriptionProps) => {
  return (
    <Controller
      name={FORM_DESCRIPTION_ELEMENT}
      control={control}
      rules={{
        required: true,
      }}
      defaultValue={''}
      render={({ field }) => (
        <>
          <FormLabel>
            {FORM_DESCRIPTION_ELEMENT.replace(/^./, (str) => str.toUpperCase())}
          </FormLabel>
          <TextareaAutosize
            maxLength={150}
            {...field}
            style={{
              background: 'inherit',
              borderRadius: '4px',
              borderColor: !!errors[FORM_DESCRIPTION_ELEMENT]
                ? '#d32f2f'
                : '#bdc1c2',
              marginTop: '8px',
            }}
            minRows={3}
            maxRows={5}
          />
          {!!errors[FORM_DESCRIPTION_ELEMENT] && (
            <FormHelperText error={true}>
              {getErrorHelperText(errors[FORM_DESCRIPTION_ELEMENT])}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
};

export default UserDescription;
