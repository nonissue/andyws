type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="flex-1 overflow-y-auto">
      <section className="dark:text-gray-100 text-gray-700 padded-container font-sans">
        {children}
      </section>
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
