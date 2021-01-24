interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

export const Providers: React.FunctionComponent = ({ children }: Props) => (
  <>{children}</>
);
