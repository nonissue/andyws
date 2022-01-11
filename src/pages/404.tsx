import { getLayout } from '@/layouts/Layout';

const Custom404 = () => (
  <section className="py-12">
    <h3 className="mb-3 font-label_mono text-8xl font-black text-blue-500 dark:text-blue-500 drop-shadow">
      404
    </h3>
    <article className="prose prose-2xl dark:prose-invert">
      <p>
        The requested page cannot be found.{' '}
        <a href="mailto:andy@andy.ws" className="font-bold no-underline">
          Contact
        </a>{' '}
        me if this error is erroneous.
      </p>
    </article>
  </section>
);

Custom404.getLayout = getLayout;

export default Custom404;
