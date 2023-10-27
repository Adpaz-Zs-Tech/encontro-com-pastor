import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

type selectboxProps = {
  placeholder?: string;
  type?: string;
  label: string;
  error?: string;
  value?: any;
};

export function InputBase<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...inputProps
}: UseControllerProps<FormType> & selectboxProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="w-full">
          <label className="text-gray-500 font-medium mb-2">
            {inputProps.label}
          </label>
          <input
            {...field}
            {...inputProps}
            className="h-8 border rounded-md w-full border-gray-300 p-2"
          />

          {inputProps.error && (
            <p className="text-xs text-red-system mt-1">{inputProps.error}</p>
          )}
        </div>
      )}
    />
  );
}
