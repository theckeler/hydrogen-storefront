import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Footer} from '~/components/Footer';
import {Header} from './Header';
import {SearchAside} from './Asides/SearchAside';
import {CartAside} from './Asides/CartAside';
import {AccountAside} from './Asides/AccountAside';

export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  return (
    <>
      <CartAside cart={cart} />
      <SearchAside />
      <AccountAside />

      <div className="bg-sky-100 border-b border-sky-200 2xl:border-b-0">
        <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      </div>

      <main className="header max-w-screen-2xl mx-auto w-full px-2 2xl:p-0">
        {children}
      </main>

      <Suspense>
        <Await resolve={footer}>
          {(footer) => <Footer menu={footer.menu} />}
        </Await>
      </Suspense>
    </>
  );
}
