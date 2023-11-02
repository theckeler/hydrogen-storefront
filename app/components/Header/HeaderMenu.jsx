import {NavLink, useMatches} from '@remix-run/react';
import {CloseAside} from '@/components/Asides/CloseAside';
import {HeaderAside} from '@/components/Asides/Header';

export function HeaderMenu({menu, viewport}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;

  return (
    <nav
      className="z-0 lg:ml-8 fixed right-0 top-0 invisible lg:visible target:visible lg:relative target:z-50 min-w-[400px] w-full h-full"
      role="navigation"
      id="main-menu"
    >
      <CloseAside
        className="w-full h-full bg-blue-200/80 lg:hidden"
        svg={false}
      />
      <ul className="bg-white lg:bg-transparent gap-2 align-middle lg:flex flex-col lg:flex-row p-4 max-w-sm absolute lg:relative top-0 right-0 h-[calc(100vh-114px)] lg:h-auto max-h-screen min-h-[100dvh] lg:min-h-min min-w-[400px] drop-shadow lg:drop-shadow-none">
        <HeaderAside heading={false} className="lg:hidden" />
        {/* {(menu || FALLBACK_HEADER_MENU).items.map((item) => { */}
        <li>
          <NavLink to="/collections">Collections</NavLink>
        </li>
        <li>nav</li>
        <li>nav</li>
        <li>nav</li>
        {/* {menu.items.map((item, i) => {
          // if (!item.url) return null;

          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain)
              ? new URL(item.url).pathname
              : item.url;
          return (
            <li key={i}>
              <NavLink
                className=""
                end
                key={item.id}
                onClick={closeAside}
                prefetch="intent"
                style={activeLinkStyle}
                to={url}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })} */}
      </ul>
    </nav>
  );
}
