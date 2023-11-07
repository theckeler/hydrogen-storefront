import {NavLink, useMatches} from '@remix-run/react';
import {Icons} from '@/components/Icons';

export function HeaderMenuMain({className, submenu, handleMenuOpen}) {
  const linkCSS = 'flex items-center p-2 lg:p-3 w-full';
  const linkActiveCSS = 'text-sky-800 fill-sky-800 bg-neutral-100';

  return (
    <ul
      className={`lg:flex gap-6 text-4xl lg:text-base lg:font-bold overflow-y-auto ${className}`}
    >
      <li>
        <a
          href="#subnav"
          className={`${linkCSS} ${!!submenu ? linkActiveCSS : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleMenuOpen('subnav');
          }}
        >
          <span className="h-12 lg:h-6 w-12 lg:w-6 hidden lg:block">
            {submenu ? (
              <Icons icon="expandless" />
            ) : (
              <Icons icon="expandmore" className="" />
            )}
          </span>
          Dropdown Menu
          <span className="h-12 w-12 ml-auto lg:hidden">
            <Icons icon="chevronright" className="" />
          </span>
        </a>
      </li>
      <li>
        <NavLink to="/collections" className={linkCSS}>
          Collections
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={linkCSS}>
          Fusce quis nisi quis
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={linkCSS}>
          Mauris pharetra justo
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={linkCSS}>
          Mauris in auctor
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={linkCSS}>
          vestibulum orci posuere
        </NavLink>
      </li>
      <li className="ml-auto">
        <NavLink to="/" className={linkCSS + ' bg-slate-200'}>
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}
