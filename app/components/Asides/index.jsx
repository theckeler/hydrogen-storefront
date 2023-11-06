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
}) {
  return (
    <div
      aria-modal
      // className="fixed opacity-0 inset-0 z-0 invisible target:visible target:opacity-100 target:pointer-events-auto target:z-50"
      className={className + ' fixed top-0 left-0 z-30 h-screen w-screen '}
      id={id}
      role="dialog"
    >
      <CloseAside
        className="w-full h-full bg-blue-200/90"
        svg={false}
        handleMenuClose={handleMenuClose}
      />
      <div
        //className="absolute right-0 top-0 lg:drop-shadow flex flex-col h-[calc(100vh-114px)] max-h-screen min-h-[100dvh] bg-white max-w-2xl w-full md:auto"
        className="absolute right-0 top-0 z-40 bg-white max-w-2xl w-full md:auto h-[calc(100vh-114px)] max-h-screen min-h-[100dvh]"
      >
        <HeaderAside heading={heading} handleMenuClose={handleMenuClose} />
        <main>{children}</main>
      </div>
    </div>
  );
}
