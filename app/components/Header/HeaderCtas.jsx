import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {IconText} from '../IconText';
import {Icons} from '../Icons';

export function HeaderCtas({isLoggedIn, cart}) {
  const buttonCSS =
    'w-12 lg:w-auto block p-2 rounded relative text-center bg-white lg:hover:bg-yellow-500 group';
  const iconCSS = 'lg:max-h-8 fill-slate-800';
  // const iconCSS = 'fill-gray-800 lg:group-hover:fill-sky-200';
  const iconTextCSS = 'text-slate-800';
  // const iconTextCSS = 'text-gray-800 lg:group-hover:text-sky-200';

  return (
    <nav role="navigation">
      <ul className="grid grid-cols-3 lg:grid-cols-2 gap-1 lg:gap-2 items-center">
        <li>
          <a href="#account-aside" className={buttonCSS}>
            {isLoggedIn ? (
              <Icons icon="logout" className={iconCSS} />
            ) : (
              <Icons icon="person" className={iconCSS} />
            )}
            <IconText text="Account" className={iconTextCSS} />
          </a>
        </li>
        {/* <li>
          <a href="#search-aside" className={buttonCSS}>
            <Icons icon="search" className={iconCSS} />
            <IconText text="Search" className={iconTextCSS} />
          </a>
        </li> */}
        <li>
          <Suspense fallback={<Icons icon="cart" className={iconCSS} />}>
            <Await resolve={cart}>
              {(cart) => {
                return (
                  <a href="#cart-aside" className={buttonCSS}>
                    <Icons icon="cart" className={iconCSS} />
                    {cart?.totalQuantity > 0 && (
                      <div
                        className="absolute top-1 right-1 lg:right-auto lg:left-8 rounded-full bg-yellow-400 p-1 w-5 h-5 flex justify-center items-center"
                        style={{fontSize: '10px'}}
                      >
                        {cart.totalQuantity}
                      </div>
                    )}
                    <IconText text="Cart" className={iconTextCSS} />
                  </a>
                );
              }}
            </Await>
          </Suspense>
        </li>
        <li className="lg:hidden">
          <a href="#main-menu" className={buttonCSS + ' bg-blue-300'}>
            <Icons icon="hamburger" className={iconCSS} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
