import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {IconText} from '../IconText';
import {Icons} from '../Icons';

export function HeaderButtons({isLoggedIn, cart, className}) {
  const buttonCSS =
    'max-w-[48px] lg:min-w-[60px] lg:max-w-auto lg:w-auto block p-2 rounded relative text-center lg:hover:bg-yellow-500 group';
  const iconCSS = 'w-12 lg:max-h-8 fill-white xl:group-hover:fill-stone-800';
  const iconTextCSS = 'text-white xl:group-hover:text-stone-800';

  return (
    <nav
      role="navigation"
      className={`flex justify-end gap-1 lg:gap-2 ${className}`}
    >
      <a
        href="#search"
        className={buttonCSS + ' lg:hidden'}
        onClick={(e) => {
          e.currentTarget.classList.add('hidden');
        }}
      >
        <Icons icon="search" className={iconCSS} />
        <IconText text="Search" className={iconTextCSS} />
      </a>

      <a href="#account-aside" className={buttonCSS}>
        {isLoggedIn ? (
          <Icons icon="logout" className={iconCSS} />
        ) : (
          <Icons icon="person" className={iconCSS} />
        )}
        <IconText text="Account" className={iconTextCSS} />
      </a>

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

      <a href="#main-menu" className={buttonCSS + ' lg:hidden'}>
        <Icons icon="hamburger" className={iconCSS} />
      </a>
    </nav>
  );
}
