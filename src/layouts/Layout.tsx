type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="font-sans text-gray-700 dark:text-gray-100 padded-container">
      {children}
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
