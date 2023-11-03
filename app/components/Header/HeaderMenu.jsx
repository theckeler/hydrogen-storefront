import {NavLink, useMatches} from '@remix-run/react';
// import {CloseAside} from '@/components/Asides/CloseAside';
import {HeaderAside} from '@/components/Asides/Header';
import {Icons} from '@/components/Icons';

export function HeaderMenu({menu, viewport}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;

  const linkCSS = 'flex items-center p-1 lg:p-3';

  return (
    <nav
      className="z-0 fixed right-0 top-0 invisible lg:visible target:visible lg:relative target:z-50 w-full h-full"
      role="navigation"
      id="main-menu"
    >
      <div className="bg-white lg:bg-transparent align-middle absolute lg:relative top-0 right-0 h-[calc(100vh-114px)] lg:h-auto max-h-screen min-h-[100dvh] lg:min-h-min w-full drop-shadow lg:drop-shadow-none">
        <HeaderAside heading={false} className="lg:hidden" />
        {/* {(menu || FALLBACK_HEADER_MENU).items.map((item) => { */}

        <ul className="lg:flex gap-6">
          <li>
            <button className={linkCSS}>
              <span className="h-6 w-6">
                <Icons icon="arrowdropdown" />
              </span>
              Collections
            </button>
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
        <div>
          <ul></ul>
        </div>
      </div>
    </nav>
  );
}
