export interface TextProps {
  children?: React.ReactNode;
}

export const Text = ({ children }: TextProps) => <span>{children}</span>;
