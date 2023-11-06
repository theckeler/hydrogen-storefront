import {useMatches} from '@remix-run/react';
import {HeaderAside} from '@/components/Asides/Header';
// import {Icons} from '@/components/Icons';
// import {HeaderMenuSub} from './HeaderMenuSub';
import {HeaderMenuMain} from './HeaderMenuMain';

export function HeaderMenu({
  className,
  submenu,
  handleMenuOpen,
  handleMenuClose,
}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const linkCSS = 'flex items-center p-2 lg:p-3 w-full';
  const linkActiveCSS = 'text-sky-800 fill-sky-800 bg-neutral-200';
  // const navCSS =
  //   'z-40 lg:z-40 fixed invisible lg:visible target:visible target:z-40 select-none';

  return (
    <nav
      className={className + ' p-2 right-0 top-0 lg:relative w-full h-full'}
      role="navigation"
      id="main-menu"
    >
      <div className="bg-white lg:bg-transparent align-middle absolute lg:relative top-0 right-0 h-[calc(100vh-65px)] lg:h-auto max-h-screen min-h-[100dvh] lg:min-h-min w-full md:drop-shadow lg:drop-shadow-none">
        <HeaderAside
          heading={false}
          className="lg:hidden"
          handleMenuClose={handleMenuClose}
        />
        <HeaderMenuMain submenu={submenu} handleMenuOpen={handleMenuOpen} />
      </div>
    </nav>

    



  );
}
