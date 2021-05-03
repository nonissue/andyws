type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="">
      <section className="dark:text-gray-100 text-gray-700 font-sans">
        {children}
      </section>
      <div className="wavy-lines-bg custom-container mb-6 z-0">
        <div className="padded-container py-6 px-6  font-mono uppercase text-xxs md:text-center text-center bg-white text-gray-400 dark:bg-gray-900  bg-opacity-90 dark:bg-opacity-70">
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
