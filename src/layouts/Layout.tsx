type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <>
      <section className="dark:text-gray-100 text-gray-700 font-display">
        {children}
      </section>
      <div className="padded-container font-mono uppercase font-xs lg:text-right text-center bg-white text-gray-400 lg:border-r lg:border-l dark:bg-gray-900 h-24 border-b-2 dark:border-gray-800 ">
        2021 © nonissue inc
      </div>
    </>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
