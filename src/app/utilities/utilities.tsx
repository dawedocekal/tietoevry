import { InputErrorsType } from "../types/types";

export const getErrorHelperText = ({ type }: InputErrorsType): string | undefined => {
  let errorHelperText;
  switch (type) {
    case 'required':
      errorHelperText = 'This field is required';
      break;
    case 'maxLength':
      errorHelperText = 'Maximal characters in this field was written';
      break;
    case 'pattern':
      errorHelperText = 'Fill this field with correct pattern';
      break;
  }

  return errorHelperText;
};
