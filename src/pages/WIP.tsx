import Link from 'next/link';
import { getLayout } from '@/layouts/Layout';

const WIPPage = () => (
  <section className="py-12 prose dark:prose-invert">
    <h3 className="mb-3 font-label_mono text-8xl font-black text-blue-500 dark:text-blue-500">
      WIP
    </h3>
    <article className="prose-2xl">
      This section isn&apos;t finished yet! <br />
      Return{' '}
      <Link href="/">
        <a className="font-bold no-underline">Home</a>
      </Link>
      .
    </article>
  </section>
);

WIPPage.getLayout = getLayout;

export default WIPPage;
