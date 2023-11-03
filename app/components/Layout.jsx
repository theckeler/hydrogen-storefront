import {Footer} from '~/components/Footer';
import {Header} from './Header';
import {SearchAside} from './Asides/SearchAside';
import {CartAside} from './Asides/CartAside';
import {AccountAside} from './Asides/AccountAside';
import {SearchForm} from './Search';
import {HeaderMenu} from '@/components/Header/HeaderMenu';

export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  return (
    <>
      <CartAside cart={cart} />
      <SearchAside />
      <AccountAside />

      <div className="bg-slate-100">
        <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      </div>

      <div className="max-w-screen-2xl mx-auto w-full bg-white p-2 lg:p-4">
        <HeaderMenu />
      </div>

      <div className="bg-white border-b border-slate-300 p-2 lg:p-4 mb-4">
        <SearchForm className="max-w-screen-2xl mx-auto" />
      </div>

      <main className="max-w-screen-2xl mx-auto w-full px-2 2xl:p-0">
        {children}
      </main>

      <Footer />
    </>
  );
}
