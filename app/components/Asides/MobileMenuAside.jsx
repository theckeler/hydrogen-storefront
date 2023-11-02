import {Aside} from '~/components/Asides';
import {HeaderMenu} from '../Header/HeaderMenu';

export function MobileMenuAside({menu}) {
  return (
    <Aside id="mobile-menu-aside" heading="MENU">
      <HeaderMenu menu={menu} viewport="mobile" />
    </Aside>
  );
}
