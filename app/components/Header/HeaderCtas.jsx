import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {IconText} from '../IconText';
import {Icons} from '../Icons';

export function HeaderCtas({isLoggedIn, cart}) {
  const buttonCSS =
    'w-12 md:w-auto h-12 block p-2 border rounded relative flex items-center';
  return (
    <nav role="navigation">
      <ul className="flex gap-2 items-center">
        <li>
          <a
            className="md:hidden w-12 md:w-auto h-12"
            href="#mobile-menu-aside"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-full h-full"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
        <li>
          <NavLink prefetch="intent" to="/account" className={buttonCSS}>
            {isLoggedIn ? 'Account' : <Icons icon="person" className="" />}
            <IconText text="Account" />
          </NavLink>
        </li>
        <li>
          <a href="#search-aside" className={buttonCSS}>
            <Icons icon="search" className="" />
            <IconText text="Search" />
          </a>
        </li>
        <li>
          <Suspense fallback={<Icons icon="cart" className="" />}>
            <Await resolve={cart}>
              {(cart) => {
                return (
                  <a href="#cart-aside" className={buttonCSS}>
                    <Icons icon="cart" className="" />
                    <div
                      className="absolute top-1 right-1 rounded-full bg-blue-300 p-1 w-5 h-5 flex justify-center items-center"
                      style={{fontSize: '10px'}}
                    >
                      {cart.totalQuantity}
                    </div>
                    <IconText text="Cart" />
                  </a>
                );
              }}
            </Await>
          </Suspense>
        </li>
      </ul>
    </nav>
  );
}
