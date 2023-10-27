export interface SelectboxProps {
  label: string;
  error?: string;
  options: { label: string | number; value: string | number }[];
}
