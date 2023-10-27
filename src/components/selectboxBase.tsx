import { SelectboxBaseProps } from '@/types/forms';
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

export function SelectboxBase<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...selectboxProps
}: UseControllerProps<FormType> & SelectboxBaseProps) {
  const estadoCivil = [
    { label: 'Selecione...', value: '' },
    ...selectboxProps.options,
  ];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div className="w-full">
          <label className="text-gray-500 font-medium mb-2">
            {selectboxProps.label}
          </label>
          <select
            onChange={onChange}
            value={value}
            className="h-10 border rounded-md w-full border-gray-300 p-2"
          >
            {estadoCivil.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {selectboxProps.error && (
            <p className="text-xs text-red-system mt-1">
              {selectboxProps.error}
            </p>
          )}
        </div>
      )}
    />
  );
}
