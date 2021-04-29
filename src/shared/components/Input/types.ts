export type Props = {
  className: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
