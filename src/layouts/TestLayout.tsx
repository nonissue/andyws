import { Nav } from "src/components";

type Props = {
  children: React.ReactElement;
};

function TestLayout({ children }: Props): React.ReactElement {
  return (
    <>
      <section className="dark:text-gray-400 text-gray-700 shadow-xl mb-0 px-0 bg-white dark:bg-gray-900 font-display max-w-6xl mx-auto">
        <h1 className="text-6xl">TestLayout</h1>
        <Nav />

        {children}
      </section>
    </>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <TestLayout>{page}</TestLayout>
);

export { TestLayout };
