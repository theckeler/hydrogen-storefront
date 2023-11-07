import {CloseAside} from './CloseAside';
import {HeaderAside} from './Header';

/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 */
export function Aside({
  className,
  children,
  heading,
  id = 'aside',
  handleMenuClose,
  subnav = false,
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-30 ${
        subnav === true ? 'subnav' : ''
      } ${className}`}
      id={id}
    >
      <CloseAside
        className={`${
          subnav ? 'w-screen h-screen lg:w-0 lg:h-0' : 'w-screen h-screen'
        } bg-stone-800/90`}
        svg={false}
        handleMenuClose={handleMenuClose}
      />
      <div
        className={`grid grid-rows-[65px_1fr] absolute right-0 top-0 z-40 w-full md:auto h-screen max-h-screen min-h-[100dvh] max-w-2xl ${
          subnav
            ? 'lg:h-auto lg:max-h-min lg:max-w-full lg:min-h-min bg-neutral-100'
            : 'bg-stone-100'
        }`}
      >
        <HeaderAside
          heading={heading}
          handleMenuClose={handleMenuClose}
          className={subnav ? 'lg:hidden w-full' : ''}
        />
        <div className="overflow-y-auto h-[cal(100vh-65px)] max-h-screen min-h-[cal(100dvh-65px)] pb-10">
          {children}
        </div>
      </div>
    </div>
  );
}
