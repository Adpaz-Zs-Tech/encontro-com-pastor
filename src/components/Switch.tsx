import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import SwitchBase from "react-switch";

import { SwitchProps } from "@/types/forms";

export function Switch<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...switchProps
}: UseControllerProps<FormType> & SwitchProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div className="w-full">
          <div className="w-full flex justify-between">
            <label className="text-gray-500 font-medium mb-2">
              {switchProps.label}
            </label>
            <SwitchBase {...switchProps} onChange={onChange} checked={value} />
          </div>
          {switchProps.error && (
            <p className="text-xs text-red-system mt-1 text-red-500 ">
              {switchProps.error}
            </p>
          )}
        </div>
      )}
    />
  );
}
