import {HeaderMenu} from './HeaderMenu';
import {HeaderCtas} from './HeaderCtas';
import {HeaderLogo} from './HeaderLogo';

export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  return (
    <header className="max-w-screen-2xl mx-auto px-2 2xl:px-0 py-4">
      <ul className="flex items-center w-full">
        <li className="w-40">
          <HeaderLogo />
        </li>
        <li>
          <HeaderMenu menu={menu} viewport="desktop" />
        </li>
        <li className="ml-auto">
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
        </li>
      </ul>
    </header>
  );
}
