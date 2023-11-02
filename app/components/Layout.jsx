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

      <div className="bg-slate-100 border-b border-slate-400 2xl:border-b-0">
        <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
        <div className="p-2 lg:p-4">
          <ul className="grid grid-cols-[1fr_10em]">
            <li>
              <input class="w-full rounded-l border-r-0" />
            </li>
            <li>
              <button className="bg-slate-800 text-white p-2 h-full w-full flex justify-center rounded-r">
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>

      <main className="header max-w-screen-2xl mx-auto w-full px-2 2xl:p-0">
        {children}
      </main>

      <Footer />
    </>
  );
}
