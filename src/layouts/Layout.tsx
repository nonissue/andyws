import { Nav as Header } from "src/components";

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <>
      <section className="dark:text-gray-400 text-gray-700 shadow-xl mb-0 px-0 bg-white dark:bg-gray-900 font-display max-w-6xl mx-auto">
        <Header />

        {children}
      </section>
    </>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
