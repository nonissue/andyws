import { getLayout } from "@/layouts/Layout";

const Custom404 = () => (
  <section className="max-w-md py-12 text-center md:max-w-lg">
    <h1 className="mb-6 font-display text-8xl font-bold text-black text-shadow-lg dark:text-black">
      404
    </h1>
    <article className="dark:prose-dark prose-xl max-w-sm">
      <p>
        The requested page cannot be found. <br />
        <a href="mailto:andy@andy.ws" className="font-bold">
          Contact
        </a>{" "}
        me if this error is erroneous.
      </p>
    </article>
  </section>
);

Custom404.getLayout = getLayout;

export default Custom404;
