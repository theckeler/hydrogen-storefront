import {NavLink, useMatches} from '@remix-run/react';
import {activeLinkStyle} from '../activeLinkStyle';

export function HeaderMenu({menu, viewport}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className="ml-8" role="navigation">
      <ul className=" gap-2 align-middle hidden lg:flex">
        {/* {(menu || FALLBACK_HEADER_MENU).items.map((item) => { */}
        {menu.items.map((item, i) => {
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
        })}
      </ul>
    </nav>
  );
}
