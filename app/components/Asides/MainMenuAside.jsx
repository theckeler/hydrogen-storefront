import {Aside} from '@/components/Asides/';
import {HeaderMenuMain} from '@/components/Header/HeaderMenuMain';

export function MainMenuAside({
  className,
  submenu,
  handleMenuClose,
  handleMenuOpen,
}) {
  return (
    <Aside className="lg:hidden" id="main-menu" handleMenuClose={handleMenuClose}>
      <HeaderMenuMain submenu={submenu} handleMenuOpen={handleMenuOpen} />
    </Aside>
  );
}
