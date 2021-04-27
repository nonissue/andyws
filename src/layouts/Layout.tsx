type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="">
      <section className="dark:text-gray-100 text-gray-700 font-display">
        {children}
      </section>
      <div className="wavy-lines-bg custom-container mb-6">
        <div className="custom-container py-6 px-6 border-t font-mono uppercase text-xxs md:text-center text-center bg-white text-gray-400 md:border-r md:border-l dark:bg-gray-900 border-b-2 dark:border-gray-800 bg-opacity-90 dark:bg-opacity-70 backdrop-filter backdrop-blur-sm dark:backdrop-filter dark:backdrop-blur-md">
          2021 © nonissue inc
        </div>
      </div>
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
