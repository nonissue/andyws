import { getLayout } from "@/layouts/Layout";

const Custom404 = () => (
  <section className="py-12 max-w-md md:max-w-lg text-center">
    <h1 className="text-shadow-lg text-8xl text-black dark:text-black font-display  font-bold mb-6">
      404
    </h1>
    <article className="prose-xl dark:prose-dark max-w-sm ">
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
