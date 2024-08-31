'use client';
import { FieldErrors, Controller, Control } from 'react-hook-form';
import Rating from '@mui/material/Rating';

interface RatingInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: FieldErrors;
  required: boolean;
}

const RatingInput: React.FC<RatingInputProps> = ({ name, label, control, errors, required }) => {
  return (
    <div className="mb-6">
      <label className="text-lg leading-[22px] mb-3 block capitalize">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `${label} is required` : false }}
        render={({ field }) => (
          <Rating
            id={name}
            name={name}
            value={field.value}
            onChange={(event, newValue) => field.onChange(newValue)}
          />
        )}
      />
      {errors[name] && <div className="text-secondary-red text-xs leading-4 mt-1">
        {(errors[name] as { message: string }).message}</div>}
    </div>
  );
};

export default RatingInput;
