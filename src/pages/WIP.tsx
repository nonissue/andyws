import { getLayout } from "src/layouts/Layout";

const WIPPage = () => (
  <section className="py-12">
    <h3 className="text-8xl text-red-500 dark:text-red-500 font-label-mono font-light mb-3">
      WIP
    </h3>
    <article className="prose-2xl">
      {/* <span className="opacity-75 font-mono block my-4 text-base">
        (Work in progress)
      </span> */}
      This section isn&apos;t finished yet! <br />
      Return{" "}
      <a href="/" className="font-bold">
        Home
      </a>
      .
    </article>
  </section>
);

WIPPage.getLayout = getLayout;

export default WIPPage;
