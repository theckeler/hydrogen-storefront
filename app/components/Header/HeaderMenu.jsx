import {NavLink, useMatches} from '@remix-run/react';
import {HeaderAside} from '@/components/Asides/Header';
import {Icons} from '@/components/Icons';
import {Image} from '@shopify/hydrogen-react';

export function HeaderMenu({submenu, setSubmenu}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const linkCSS = 'flex items-center p-2 lg:p-3 w-full';
  const linkActiveCSS = 'text-sky-800 fill-sky-800 bg-neutral-200';
  const navCSS =
    'z-40 lg:z-40 fixed invisible lg:visible target:visible target:z-40 select-none';

  return (
    <nav
      className={navCSS + 'p-2 right-0 top-0 lg:relative w-full h-full'}
      role="navigation"
      id="main-menu"
    >
      <div className="bg-white lg:bg-transparent align-middle absolute lg:relative top-0 right-0 h-[calc(100vh-65px)] lg:h-auto max-h-screen min-h-[100dvh] lg:min-h-min w-full md:drop-shadow lg:drop-shadow-none">
        <HeaderAside heading={false} className="lg:hidden" />
        <ul className="lg:flex gap-6 border-b border-neutral-200 text-4xl lg:text-base lg:font-bold overflow-y-auto">
          <li>
            <a
              href="#subnav"
              className={`${linkCSS} ${!!submenu ? linkActiveCSS : ''}`}
              onClick={() => {
                setSubmenu(!submenu);
              }}
            >
              <span className="h-12 lg:h-6 w-12 lg:w-6 hidden lg:block">
                {submenu ? (
                  <Icons icon="arrowdropup" />
                ) : (
                  <>
                    <Icons icon="arrowdropdown" className="" />
                  </>
                )}
              </span>
              Dropdown Menu
              <span className="h-12 w-12 ml-auto lg:hidden">
                <Icons icon="arrowright" className="" />
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
        {!!submenu && (
          <nav
            className={`${navCSS} absolute top-0 md:top-full left-0  w-full bg-white shadow-lg`}
            id="subnav"
            role="navigation"
          >
            <HeaderAside heading={false} className="lg:hidden" />
            <ul className="max-w-screen-2xl mx-auto w-full p-2 lg:p-4 grid lg:grid-cols-4">
              <li>
                <ul>
                  <li>
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenFrontpack.jpg?v=1675455064&width=1000&height=1000&crop=center"
                      className="mb-2 border"
                    />
                    <h3 className="text-lg font-bold mb-1 pb-1 border-b border-stone-500">
                      Proin porttitor auctor nisl
                    </h3>
                  </li>
                  <li>
                    <a href="#top" className="underline">
                      Suspendisse convallis
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="underline">
                      Suspendisse convallis
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="underline">
                      Suspendisse convallis
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="underline">
                      Suspendisse convallis
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="underline">
                      Suspendisse convallis
                    </a>
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
}
