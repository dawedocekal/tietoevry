import { getErrorHelperText } from 'src/app/utilities/utilities';
import { Control } from 'react-hook-form/dist/types';
import { Controller } from 'react-hook-form';
import {
  FORM_EMAIL_ELEMENT,
  FORM_CITY_ELEMENT,
  FORM_FIRSTNAME_ELEMENT,
  FORM_LASTNAME_ELEMENT,
  FORM_PHONE_ELEMENT,
  FORM_STREET_ELEMENT,
  FORM_ZIP_ELEMENT,
} from 'src/app/constants/constants';
import { TextField } from '@mui/material';

interface UserInfoSectionProps {
  control: Control;
  errors: any;
}

const FORMLINES = [
  FORM_FIRSTNAME_ELEMENT,
  FORM_LASTNAME_ELEMENT,
  FORM_ZIP_ELEMENT,
  FORM_CITY_ELEMENT,
  FORM_STREET_ELEMENT,
  FORM_PHONE_ELEMENT,
  FORM_EMAIL_ELEMENT,
];

const UserInfoSection = ({ control, errors }: UserInfoSectionProps) => {
  return (
    <>
      {FORMLINES.map((formElement) => {
        return (
          <Controller
            key={formElement}
            name={formElement}
            control={control}
            rules={Object.assign(
              {},
              {
                required: true,
                maxLength: formElement === FORM_EMAIL_ELEMENT ? 30 : 15,
              },
              getValidationPattern(formElement)
            )}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                {...field}
                label={formElement.replace(/^./, (str) => str.toUpperCase())}
                error={!!errors[formElement]}
                variant="outlined"
                helperText={
                  !!errors[formElement] &&
                  getErrorHelperText(errors[formElement])
                }
                sx={{ my: 1 }}
              />
            )}
          />
        );
      })}
    </>
  );
};

const getValidationPattern = (formElement: string) => {
  if (formElement === FORM_EMAIL_ELEMENT)
    return { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ };
  if (formElement === FORM_ZIP_ELEMENT) return { pattern: /^\d{5}$/ };
  return {};
};
export default UserInfoSection;
