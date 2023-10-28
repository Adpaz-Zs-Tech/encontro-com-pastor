import { Controller, UseControllerProps, FieldValues } from "react-hook-form";

import { InputBaseProps } from "@/types/forms";

export function InputBase<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...inputProps
}: UseControllerProps<FormType> & InputBaseProps) {
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
          <input
            {...inputProps}
            onChange={onChange}
            value={value}
            className="h-10 border rounded-md w-full border-gray-300 p-2"
          />
          {inputProps.error && (
            <p className="text-xs text-red-system mt-1 text-red-500 ">
              {inputProps.error}
            </p>
          )}
        </div>
      )}
    />
  );
}
