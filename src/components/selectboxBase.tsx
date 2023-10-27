import { InputProps } from '@/types/forms';
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

const estadoCivil = [
  { label: 'Selecione...', value: '' },
  { label: 'Solteiro(a)', value: 'solteiro' },
  { label: 'Casado(a)', value: 'casado' },
  { label: 'Separado(a)', value: 'separado' },
  { label: 'Divorciado(a)', value: 'divorciado' },
];

export function SelectboxBase<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...inputProps
}: UseControllerProps<FormType> & InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div className="w-full">
          <label className="text-gray-500 font-medium mb-2">
            {inputProps.label}
          </label>
          <select
            {...inputProps}
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

          {inputProps.error && (
            <p className="text-xs text-red-system mt-1">{inputProps.error}</p>
          )}
        </div>
      )}
    />
  );
}
