import {HeaderMenu} from './HeaderMenu';
import {HeaderCtas} from './HeaderCtas';
import {HeaderLogo} from './HeaderLogo';

export function Header({header, isLoggedIn, cart}) {
  const {shop} = header;
  return (
    <header className="max-w-screen-2xl mx-auto px-2 2xl:px-0 py-1 lg:py-2">
      <ul className="grid grid-cols-[140px_0_1fr] lg:grid-cols-[200px_1fr_1fr] items-center w-full">
        <li>
          <HeaderLogo />
        </li>
        <li>
          {/* <HeaderMenu viewport="desktop" /> */}
        </li>
        <li className="ml-auto">
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
        </li>
      </ul>
    </header>
  );
}
