import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {Footer} from './Footer';
import {Header} from './Header';
import {SearchAside} from './Asides/SearchAside';
import {CartAside} from './Asides/CartAside';
import {AccountAside} from './Asides/AccountAside';
import {Icons} from '@/components/Icons';
import {MainMenuAside} from './Asides/MainMenuAside';
import {HeaderMenuMain} from './Header/HeaderMenuMain';
import {SubMenuAside} from './Asides/SubMenuAside';

export function Layout({cart, children = null, header, isLoggedIn}) {
  const url = useLocation();
  const navigate = useNavigate();

  const updateMenu = url.hash.replace('#', '');
  const [submenu, setSubmenu] = useState(updateMenu ? updateMenu : false);

  function handleMenuOpen(menu) {
    submenu === menu ? setSubmenu(false) : setSubmenu(menu);
  }

  function handleMenuClose() {
    setSubmenu(false);
    navigate(url.pathname);
  }

  useEffect(() => {
    console.log('submenu: ', submenu);
  }, [submenu]);

  return (
    <>
      <CartAside
        className={`${
          submenu == 'cart' ? 'block' : 'hidden'
        } h-screen w-screen `}
        cart={cart}
        handleMenuClose={handleMenuClose}
      />

      {submenu === 'search' && (
        <SearchAside
          handleMenuClose={handleMenuClose}
          className="h-screen w-screen"
        />
      )}

      {submenu === 'main-menu' && (
        <MainMenuAside
          submenu={submenu}
          handleMenuClose={handleMenuClose}
          handleMenuOpen={handleMenuOpen}
          className="h-screen w-screen"
        />
      )}

      {submenu === 'account' && (
        <AccountAside
          handleMenuClose={handleMenuClose}
          className="h-screen w-screen"
        />
      )}

      <div className="bg-stone-800">
        <button className="max-w-screen-2xl mx-auto w-full text-xs text-yellow-500 flex items-center justify-center p-2 uppercase">
          <span className="h-8 w-8">
            <Icons icon="arrowdropdown" className="fill-yellow-500" />
          </span>
          Lorem ipsum dolor sit amet
        </button>
      </div>

      <header>
        <div className="bg-sky-700">
          <Header
            header={header}
            cart={cart}
            isLoggedIn={isLoggedIn}
            handleMenuOpen={handleMenuOpen}
          />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full lg:p-0">
          <HeaderMenuMain
            handleMenuOpen={handleMenuOpen}
            handleMenuClose={handleMenuClose}
            submenu={submenu === 'subnav' ? true : false}
            className="hidden lg:block"
          />

          {/* <div className="z-40 p-2 lg:p-0 relative h-0 hidden lg:block"> */}
          {submenu === 'subnav' && (
            <SubMenuAside
              className="lg:relative h-0 m-h-0 w-full"
              handleMenuClose={handleMenuClose}
              handleMenuOpen={handleMenuOpen}
            />
          )}
          {/* </div> */}
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto w-full">{children}</main>

      <Footer />
    </>
  );
}
