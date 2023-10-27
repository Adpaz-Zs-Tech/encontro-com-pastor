export interface SelectboxBaseProps {
  label: string;
  error?: string;
  options: { label: string | number; value: string | number }[];
}
