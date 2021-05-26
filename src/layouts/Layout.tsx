type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="test">
        <section className="dark:text-gray-100 text-gray-700 font-sans">
          {children}
        </section>
      </div>
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
