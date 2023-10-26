import { ReactNode } from "react";

export function Text({ text, icon }: { text: string; icon?: ReactNode }) {
  return (
    <div>
      <p className="text-gray-500 mt-3 text-sm leading-6 flex gap-2">
        {icon && <div>{icon}</div>}
        {text}
      </p>
    </div>
  );
}
