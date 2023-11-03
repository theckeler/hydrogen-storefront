// import {HeaderMenu} from './HeaderMenu';
import {HeaderButtons} from './HeaderButtons';
import {HeaderLogo} from './HeaderLogo';
import {SearchForm} from '@/components/Search/';
import {Icons} from '@/components/Icons';
import {HeaderCtas} from './HeaderCtas';

export function Header({header, isLoggedIn, cart}) {
  const {shop} = header;
  return (
    <div className="max-w-screen-2xl mx-auto px-2 2xl:px-0 py-1 lg:py-2 grid grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr_300px_130px] lg:gap-4 items-center w-full">
      <HeaderLogo className="fill-white lg:col-start-1" />
      <HeaderButtons
        className="lg:col-start-4"
        isLoggedIn={isLoggedIn}
        cart={cart}
      />
      <HeaderCtas />
      <SearchForm
        id="search"
        className="my-1 col-span-2 lg:col-auto row-start-2 lg:row-start-1 lg:col-start-2 hidden lg:flex max-w-screen-2xl mx-auto w-full justify-end target:flex"
      />
    </div>
  );
}
