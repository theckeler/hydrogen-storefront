import {Aside} from './';
import {HeaderMenuSub} from '../Header/HeaderMenuSub';
import {Icons} from '@/components/Icons';

export function SubMenuAside({className, handleMenuClose, handleMenuOpen}) {
  return (
    <Aside
      className={className}
      id="subnav"
      handleMenuClose={handleMenuClose}
      subnav
      heading={
        <button
          className="grid items-center grid-cols-[28px_1fr] w-full"
          onClick={() => handleMenuOpen('main-menu')}
        >
          <Icons icon="chevronleft" className="" />
          <span className="text-left">Back to Main Menu</span>
        </button>
      }
    >
      <HeaderMenuSub className="lg:absolute lg:shadow-lg bg-neutral-100" />
    </Aside>
  );
}
