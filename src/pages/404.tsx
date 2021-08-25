import { getLayout } from "@/layouts/Layout";

const Custom404 = () => (
  <section className="py-12">
    <h3 className="drop-shadow text-8xl text-red-500 dark:text-red-500 font-label-mono font-black mb-3">
      404
    </h3>
    <article className="prose-2xl dark:prose-dark">
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
