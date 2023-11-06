import {useState, useEffect} from 'react';

import {Footer} from '~/components/Footer';
import {Header} from './Header';
import {SearchAside} from './Asides/SearchAside';
import {CartAside} from './Asides/CartAside';
import {AccountAside} from './Asides/AccountAside';
// import {SearchForm} from './Search';
import {HeaderMenu} from '@/components/Header/HeaderMenu';
import {Icons} from '@/components/Icons';

export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  const [submenu, setSubmenu] = useState(false);

  return (
    <>
      <CartAside cart={cart} />
      <SearchAside />
      <AccountAside />

      <div className="bg-stone-800">
        <button className="max-w-screen-2xl mx-auto w-full text-xs text-yellow-500 flex items-center justify-center p-2 uppercase">
          <span className="h-8 w-8">
            <Icons icon="arrowdropdown" className="fill-yellow-500" />
          </span>
          Lorem ipsum dolor sit amet
        </button>
      </div>

      <header className="">
        <div className="bg-sky-700">
          <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full bg-white p-2 lg:p-0">
          <HeaderMenu submenu={submenu} setSubmenu={setSubmenu} />
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto w-full px-2 2xl:p-0">
        {children}
      </main>

      <Footer />
    </>
  );
}
