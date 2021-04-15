type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <>
      <section className="dark:text-gray-100 text-gray-700 font-display">
        {children}
      </section>
      <div className="padded-container text-right bg-white dark:bg-gray-900 h-24 border-b-2 dark:border-gray-700 font-mono uppercase font-sm text-gray-400">
        2021 © nonissue inc
      </div>
    </>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
